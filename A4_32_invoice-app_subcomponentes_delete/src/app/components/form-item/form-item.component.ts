import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

//34
@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule],                                                             //para el ng-model
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();
  private counterId : number = 4;

  item : any = {
    product : '',
    price : '',
    quantity : '',
  }

  //35
  onSubmit(itemForm : NgForm) : void {                                            //NgForm : el tipo q viene del formulario.
    if(itemForm.valid) {                                                          //doble validacion de formulario.
      this.addItemEventEmitter.emit({id : this.counterId, ...this.item});         //emite el id del item y el item.
      this.counterId++;                                                           //aumenta el contador de id para el siguiente item q se agregue.
      this.item = {                                                               //limpia el formulario
        product : '',
        price : '',
        quantity : '',
      };  
      itemForm.reset();             //esto es para resetear los mensajes de error en el formulario , despues de guardar.
      itemForm.resetForm();
    }
 
  }

}
