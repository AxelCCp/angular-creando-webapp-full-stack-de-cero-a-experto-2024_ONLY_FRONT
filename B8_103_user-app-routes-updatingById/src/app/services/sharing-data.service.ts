import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _newUserEventEmitter : EventEmitter<User> = new EventEmitter();         //106 - el "_" de _newUserEventEmitter,  es pq va a tener metodo getter.

  private _idUserEventEmitter = new EventEmitter();

  private _findUserByIdEventEmitter = new EventEmitter();

  private _selectUserEventEmitter = new EventEmitter();

  
  constructor() { }


  get newUserEventEmitter() : EventEmitter<User> {
    return this._newUserEventEmitter;
  }

  get idUserEventEmitter() : EventEmitter<number> {
    return this._idUserEventEmitter;
  }

  get findUserByIdEventEmitter() : EventEmitter<number> {
    return this._findUserByIdEventEmitter;
  }

  get selectUserEventEmitter() : EventEmitter<User> {
    return this._selectUserEventEmitter;
  }
}
