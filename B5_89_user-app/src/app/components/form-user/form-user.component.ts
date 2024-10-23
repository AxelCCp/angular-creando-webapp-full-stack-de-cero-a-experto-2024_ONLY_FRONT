import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'form-user',
  standalone: true,
  imports: [FormsModule],         //92-FormsModule :para poder usar formularios.
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  @Input() user : User;

  @Output() newUserEventEmitter : EventEmitter<User> = new EventEmitter();        //para emitir al comp padre

  constructor() {
    this.user = new User();
  }

  onSubmit(userForm : NgForm) : void {
    if(userForm.valid){
      this.newUserEventEmitter.emit(this.user);                                     //se emite al componente padre.
      console.log(this.user);  
    }
    userForm.reset();
    userForm.resetForm();
    
  }


  onClear(userForm : NgForm) : void {
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }

}
