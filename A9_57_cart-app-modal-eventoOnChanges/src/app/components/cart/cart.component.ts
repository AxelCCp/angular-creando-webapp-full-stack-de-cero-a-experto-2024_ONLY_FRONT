import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnChanges{

  @Input() items : CartItems[] = [];

  total : number = 0;

  //57
  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calculateTotal();
     this.saveSession();
  }

  @Output() idProductEventEmitter = new EventEmitter();

  onDeleteCart(id : number) {
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal() : void {
    this.total = this.items.reduce( (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
  }

  saveSession() : void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
