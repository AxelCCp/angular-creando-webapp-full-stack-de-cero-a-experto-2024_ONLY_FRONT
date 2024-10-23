import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() products! : Product[];

  @Output() productEventEmmiter : EventEmitter<Product> = new EventEmitter()
  
  onAddCart(product : Product) {
    this.productEventEmmiter.emit(product);
  }
}


