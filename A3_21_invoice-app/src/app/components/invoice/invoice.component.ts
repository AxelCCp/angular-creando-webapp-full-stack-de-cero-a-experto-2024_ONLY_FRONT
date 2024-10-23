import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{

  constructor(private service : InvoiceService){}                                                 //25.se genera la inyeccion del InvoiceService. Se inyecta y queda como atr de la clase.
  
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  invoice! : Invoice;
}
