import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserComponent } from '../user/user.component';
import { FormUserComponent } from '../form-user/form-user.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, FormUserComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit{

  title : string = 'User management application';

  users : User[] = [];

  userSelected : User;

  open : boolean = false;

  constructor(private service : UserService) {
    this.userSelected = new User();
  }
  
  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);              //90-nos suscribimoos a los usuarios que vengan desde el back.
  }

  addUser(user : User) {

    if(user.id > 0) {
      this.users = this.users.map(u => {
        if(u.id == user.id) {
          return { ...user};
        }
        return u;
      });
    } else {
      this.users = [...this.users, {...user, id : new Date().getTime()}];           //con id 
    }


      Swal.fire({
        title: "Saved!",
        text: "The user was save ok!",
        icon: "success"
      });


    this.userSelected = new User(); //se reinicia el usuario.

    this.setOpen();
  }

  removeUser(id : number) : void {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.users = this.users.filter(user => user.id != id);

        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success"
        });
      }
    });

    
    
    
  }

  setSelectedUser(userRow : User) : void {
    this.userSelected = {...userRow};
    this.open = true;
  }


  setOpen() {
    this.open = !this.open;
  }

}
