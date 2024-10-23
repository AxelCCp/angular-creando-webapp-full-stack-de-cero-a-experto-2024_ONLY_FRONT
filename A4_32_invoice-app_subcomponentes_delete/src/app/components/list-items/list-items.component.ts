import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RowItemComponent } from '../row-item/row-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  @Input() items : Item[] = [];

  @Output() removeEventEmitter : EventEmitter<number> = new EventEmitter();         //32.con todo esto se va pasando el evento de onRemove al comp padre.
  onRemove(id : number) {
    this.removeEventEmitter.emit(id);
  }

}
