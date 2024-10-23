import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [
    {
      id : 1,
      name : 'Yoh',
      lastname : 'zzz',
      email : 'xxxxxx@gmail.jp',
      username : 'yoh',
      password : '123456'
    },
    {
      id : 2,
      name : 'Giru',
      lastname : 'gt',
      email : 'giru@gmail.jp',
      username : 'giru',
      password : '123456'
    }
  ];


  constructor() {}

  findAll() : Observable<User[]> {
    return of(this.users);
  } 

}
