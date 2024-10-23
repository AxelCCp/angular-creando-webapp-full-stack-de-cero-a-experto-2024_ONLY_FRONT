import { Component, EventEmitter } from '@angular/core';
import { CartItems } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items : CartItems[] = [];
  total : number = 0;
 

  constructor(private router : Router, private sharingDataService : SharingDataService) {
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];                                  //61 - le asignamos los items del estado de las rutas. el state es el que contiene los items y los maneja como si fuese un arreglo.
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteCart(id : number) {
    this.sharingDataService.idProductEventEmitter.emit(id);                                                   //62 - llama al metodo get de idProductEventEmitter en el service.
  }

}
