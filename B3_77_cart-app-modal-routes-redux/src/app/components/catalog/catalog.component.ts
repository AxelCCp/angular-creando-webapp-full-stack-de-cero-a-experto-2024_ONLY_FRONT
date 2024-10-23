import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { load } from '../../store/products.actions';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{

  products! : Product[];

  constructor(private sharingDataService : SharingDataService, 
              private productService : ProductService,
              private store : Store<{products : any}>) {                                              //84 - "products" : corresponde al producReducer el cual esta configurado con el nobre "products" en app.config.ts"
                this.store.select('products').subscribe(state => this.products = state.products);     //84 - "this.store.select('products')" : se seleccionan los productos del store y con el subscribe() nos mantenemos a la escucha.
              }

  ngOnInit(): void {
     this.store.dispatch(load({ products : this.productService.findAll()}))       //84 - se mandan los productos en el payload a la accion. y la accion se despacha al store app.config.ts. y este store va a buscar que reducer tiene una accion llamada "load"
  }

  onAddCart(product : Product) {
    this.sharingDataService.productEventEmmiter.emit(product);                                  //64 - se llama al getter de productEventEmmiter.
  }
}


