import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{

  products! : Product[];

  constructor(private sharingDataService : SharingDataService, private productService : ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.findAll();
  }

  onAddCart(product : Product) {
    this.sharingDataService.productEventEmmiter.emit(product);                                  //64 - se llama al getter de productEventEmmiter.
  }
}


