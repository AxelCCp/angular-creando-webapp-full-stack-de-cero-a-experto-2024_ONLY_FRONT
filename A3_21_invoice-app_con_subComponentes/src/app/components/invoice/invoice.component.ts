import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, CompanyViewComponent, ListItemsComponent, ClientViewComponent, TotalComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{

  constructor(private service : InvoiceService){}                                                 //25.se genera la inyeccion del InvoiceService. Se inyecta y queda como atr de la clase.
  
  ngOnInit(): void {
    //this.invoice = this.service.getInvoice();
    this.invoice = this.service.getInvoiceWithTotal();
  }

  invoice! : Invoice;
}
