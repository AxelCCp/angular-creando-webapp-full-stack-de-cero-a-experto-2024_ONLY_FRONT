import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product! : Product;

  @Output() productEventEmitter : EventEmitter<Product> = new EventEmitter();
  
  onAddCart(product : Product) {
    this.productEventEmitter.emit(product);
  }

}
