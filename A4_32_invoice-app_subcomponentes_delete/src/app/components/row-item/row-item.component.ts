import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() removeEventEmitter : EventEmitter<number> = new EventEmitter();           //32. <number> : tipo de dato q se va a transmitir con la funcion.  ////32.con todo esto se va pasando el evento de onRemove al comp padre.
  onRemove(id : number) : void {
    this.removeEventEmitter.emit(id);
  }

}
