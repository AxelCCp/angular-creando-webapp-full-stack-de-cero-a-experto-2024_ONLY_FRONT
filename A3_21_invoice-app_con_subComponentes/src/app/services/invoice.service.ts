import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice : Invoice = invoiceData;

  constructor() { }

  getInvoice() : Invoice {
    return this.invoice;
  }


  getInvoiceWithTotal() : Invoice {
    const total = this.calculateTotal3ConReduce();
    return {... this.invoice, total : total};                                                // total : total <=> total : valor      // ...this.invoice ===> se le pasa un clon de invoice.
  }
  

  calculateTotal() {
    let total = 0;
    this.invoice.items.forEach(items => {
      total += (items.price * items.quantity);
    });
    return total;
  }

  calculateTotal2() {
    let total = 0;
    this.invoice.items.forEach(item => {
      //total += items.total();                     //31.como los datos todavía no vienen del back, la funcion total() da error. entonces hay q reemplazar por (item.price + item.quantity)         
      total += item.price * item.quantity;
    });
    return total;
  }

  calculateTotal3ConReduce() {
    return this.invoice.items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);   //30.accumulator:va acumulando los valores de cada item. //aplana todo en un solo valor.
  }                                                                                           //31.como los datos todavía no vienen del back, la funcion total() da error. entonces hay q reemplazar por (item.price + item.quantity)         

}
