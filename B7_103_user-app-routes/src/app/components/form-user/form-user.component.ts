import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-user',
  standalone: true,
  imports: [FormsModule],         //92-FormsModule :para poder usar formularios.
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  user : User;

  constructor(private router : Router,
              private sharingData : SharingDataService) {

    if(this.router.getCurrentNavigation()?.extras.state) {
      this.user = this.router.getCurrentNavigation()?.extras.state!['user'];          //107 - desde el UserComponent, se pasa a este componenete, el usuario seleccionado, y con este código se obtiene aqui al usuario.
    } else {
      this.user = new User();                                                         //107 - si no viene el usuario,  se pasa uno nuevo.
    }

    
  }

  onSubmit(userForm : NgForm) : void {
    if(userForm.valid){
      this.sharingData.newUserEventEmitter.emit(this.user);                                     //106 - se emite a
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
