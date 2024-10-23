import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter : EventEmitter<number> = new EventEmitter();                               //con el guion bajo en "_idPro..." se hace un atributo privado.

  private  _productEventEmmiter : EventEmitter<Product> = new EventEmitter();

  constructor() { }

  get idProductEventEmitter() : EventEmitter<number> {
    return this._idProductEventEmitter;
  }

  get productEventEmmiter() : EventEmitter<Product>{
    return this._productEventEmmiter;
  }
}
