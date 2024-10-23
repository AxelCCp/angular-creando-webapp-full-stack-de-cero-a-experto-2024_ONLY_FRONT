import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharingDataService } from '../../services/sharing-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form-user',
  standalone: true,
  imports: [FormsModule],         //92-FormsModule :para poder usar formularios.
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit{

  user : User;

  constructor(
      private route : ActivatedRoute,                                                 //109 - en esta version se usa el update por id,  entonces se usa route para obtener el parametro "id".
      private sharingData : SharingDataService) {

    this.user = new User(); 
  }

  ngOnInit(): void {
    this.sharingData.selectUserEventEmitter.subscribe(user => this.user = user);     //110 - [los subscribe() siempre van al principio]  se suscribe al evento para obtener al usuario.  Esta linea se pone 1ro pq primero hay q suscribirse par recibir el user y despues nos suscribimos a recibir el id por parametro y a emitir el findUserByIdEventEmitter.
    this.route.paramMap.subscribe((params => {
      const id : number = +(params.get('id') || '0');                                //109 - se obtiene el paramentro "id" y con el "+" se pasa a tipo number. si no viene el id, se pasa un 0 por defecto.
      if(id > 0) {
        //se emite el id
        this.sharingData.findUserByIdEventEmitter.emit(id);                          //109 - se emite al componente principal UserAppComponent, donde el metodo findUserById,  va a estar escuchando.
      }
    }
    ));
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
