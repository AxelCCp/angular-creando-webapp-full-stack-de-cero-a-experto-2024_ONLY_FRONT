import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItems } from '../../models/cartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() items : CartItems[] = [];

  @Input() showCart : boolean = false;

  @Output() openEventEmmiter = new EventEmitter();

  openCart() : void {
    this.openEventEmmiter.emit();
  }
}
