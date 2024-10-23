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
import { ItemsState } from '../../store/items.reducer';
import { Store } from '@ngrx/store';
import { add, remove, total } from '../../store/items.actions';


@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  constructor(
    
    private store : Store< {items : ItemsState} >,                                //79 - inyeccion del Store - este es el estado q se va  usar.  "items" : es el mismo nombre del "app.config.ts". El tipo "ItemsState", es el de la interfaz que define el tipo en "items.reducer.ts".
    private router : Router,
    private sharingDataService : SharingDataService, 

    ) {

      //se obtienen los datos del store
      this.store.select('items').subscribe(state => {                             //79 - "subscribe(state => " : se suscribe al estado de items, entonces con cualquier cambio, actualiza items y total.
        this.items = state.items;
        this.saveSession();                                                       //80 - cada vez que se agrega o elimina, se va a ejecutar esto.
        console.log('cambio el estado');
      })

    }

  ngOnInit(): void {
    //this.store.dispatch(total());       esto esta demas                         //79 - al llamar al total aca, se va a llamar al reducer q calcula el total. esto va a cambiar el estado. Y con esto se gatilla el "  this.store.select('items').subscribe(state =>" del constructor.
    this.onDeleteCart();                                                          //62 - al llamarlo aquí, el metodo se está suscribiendo, no se está llamando. esto se hace para q pueda recibir el id.
    this.onAddCart();                                                             //64 - se suscribe para obtener el producto. por ej al hacer click en agregar al carro, se produce un evento asincrono y como el metodo está suscrito, obtiene el obj producto.
  }


  onAddCart() : void {

    this.sharingDataService.productEventEmmiter.subscribe(product => {

      this.store.dispatch(add({product : product}));                                                  //79-con el subscribe se obtiene el producto y este se pasa cm obj al add().

      this.store.dispatch(total());                                                                   //79-despues del add() , se recalcula el total.

      //this.saveSession();

      this.router.navigate(['/cart']);                                                                //65 - se redirecciona a /cart y se le pasan los datos necesarios.
    
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
         
          this.store.dispatch(remove({id : id}));

          this.store.dispatch(total());

          this.router.navigate(['/cart']);
          
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



  saveSession() : void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
  
  items : CartItems[] = [];
  
}
