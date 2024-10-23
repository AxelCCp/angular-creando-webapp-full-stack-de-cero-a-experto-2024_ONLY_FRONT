import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr [app-row-item]',          //29.así se hacen los tr cuando se itera una tabla con datos.
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {

  @Input() item : Item = new  Item();

}
