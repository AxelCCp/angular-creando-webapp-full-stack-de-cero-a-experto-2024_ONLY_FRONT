import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from "../catalog/catalog.component";
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cartItem';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  constructor(private service : ProductService, private sharingDataService : SharingDataService, private router : Router) {}

  ngOnInit(): void {
    //this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();  
    this.onDeleteCart();                                                          //62 - al llamarlo aquí, el metodo se está suscribiendo, no se está llamando. esto se hace para q pueda recibir el id.
    this.onAddCart();                                                             //64 - se suscribe para obtener el producto. por ej al hacer click en agregar al carro, se produce un evento asincrono y como el metodo está suscrito, obtiene el obj producto.
  }


  onAddCart() : void {

    this.sharingDataService.productEventEmmiter.subscribe(product => {

      const hasItem = this.items.find(item => {
        return item.product.id === product.id;
      });
  
      if(hasItem) {
  
        this.items = this.items.map(item => {
          if(item.product.id === product.id) {
            return {
              ...item,
              quantity : item.quantity + 1
            }
          }
          return item;
        });
  
      } else {
        this.items = [... this.items, { product : {...product}, quantity : 1}];         // {...product} se pasa un clon del producto original  //product : {...product} los datos q se esparcieron, se pasan al atributo product, q es una nueva instancia de product.    //todo esto se hace para la inmutabilidad.
      }
     
      this.calculateTotal();
      this.saveSession();
      this.router.navigate(['/cart'], {state : {items : this.items, total : this.total}});            //65 - se redirecciona a /cart y se le pasan los datos necesarios.
    
      Swal.fire({
        title: "Cart notification",
        text: "New product added!",
        icon: "success",
        background: '#09034d',
        color: '#b4dfff'
      });
    
    });

  }

  //62 - ahora este metodo se suscribe en el oninit().
  onDeleteCart() : void {
    this.sharingDataService.idProductEventEmitter.subscribe(id => {


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        background: '#09034d',
        color: '#b4dfff',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


          this.items = this.items.filter(item => item.product.id !== id);                  //62 - con esto uno se suscribe a un evento y se emite el id cuando está disponible.
          if(this.items.length == 0) {                                                     //57 - esto es para q funcione el onChange cuando se elimina el ultimo elemento del carro y luego se actualiza la pagina.
            sessionStorage.removeItem('cart');
            sessionStorage.clear();                                                        //57 - esto elimina todo. a lo mejor no es recomendable si se guardan tmbn datos de session de usuario
          }
          this.calculateTotal();
          this.saveSession();

          this.router.navigateByUrl('/',  {skipLocationChange : true}).then(() => {                         //65 - esto es para actualizar el carro de compras despues de eliminar. Internamente lo que hace esto, es ir a la ruta base y luego va a la ruta del carro y con esto lo actualiza. Esto lo hace sin modificar el state de angular. 
            this.router.navigate(['/cart'], {state : {items : this.items, total : this.total}});
          }); 


          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
            background: '#09034d',
            color: '#b4dfff',
          });
        }
      });


    }); 

  }


  
  calculateTotal() : void {
    this.total = this.items.reduce( (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
  }


  saveSession() : void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
  

  //products : Product[] = [];
  items : CartItems[] = [];
  total : number = 0;
  
}
