import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() items : CartItems[] = [];

  @Output() idProductEventEmitter = new EventEmitter();

  onDeleteCart(id : number) {
    this.idProductEventEmitter.emit(id);
  }


  @Input() total : number = 0;
}
