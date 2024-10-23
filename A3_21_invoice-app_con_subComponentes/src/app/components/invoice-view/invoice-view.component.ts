import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent {

  @Input() name! : string;                      //se pasan los datos al componente padre.
  @Input() id! : number; 

}
