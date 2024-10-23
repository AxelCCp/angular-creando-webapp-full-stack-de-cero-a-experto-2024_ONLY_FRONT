import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-modal-cart',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent {


  @Input() items : CartItems[] = [];

  //@Input() total : number = 0;

  @Output() idProductEventEmitter = new EventEmitter();

  onDeleteCart(id : number) {
    this.idProductEventEmitter.emit(id);
  }

  @Output() closeEventEmmiter = new EventEmitter();

  closeCart() : void {
    this.closeEventEmmiter.emit();
  }

}
