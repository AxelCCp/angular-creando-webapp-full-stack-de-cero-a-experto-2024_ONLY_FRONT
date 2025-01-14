import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from "../catalog/catalog.component";
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {


  constructor(private service : ProductService) {}


  ngOnInit(): void {
    this.products = this.service.findAll();
    this.calculateTotal();
  }


  
  onAddCart(product : Product) : void {

    const hasItem =this.items.find(item => {
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
  }


  onDeleteCart(id :number) : void {
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
  }


  calculateTotal() : void {
    this.total = this.items.reduce( (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
  }

  products : Product[] = [];
  items : CartItems[] = [];
  total : number = 0;
  
}
