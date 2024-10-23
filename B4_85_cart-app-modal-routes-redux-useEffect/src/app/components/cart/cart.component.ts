import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartItems } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ItemsState } from '../../store/items.reducer';
import { Store } from '@ngrx/store';
import { total } from '../../store/items.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  items : CartItems[] = [];
  total : number = 0;

  constructor(
    private store : Store<{items : ItemsState}>,
    private sharingDataService : SharingDataService) {
    
      this.store.select('items').subscribe(state => {
        this.items = state.items;                             
        this.total = state.total;
      })
    
  }

  ngOnInit(): void {
    this.store.dispatch(total());                                                                           //80 - esta linea es para recalcular el total del carrito cuando uno actualiza la pagina con el browser.
  }

  onDeleteCart(id : number) {
    this.sharingDataService.idProductEventEmitter.emit(id);                                                   //62 - llama al metodo get de idProductEventEmitter en el service.
  }

}
