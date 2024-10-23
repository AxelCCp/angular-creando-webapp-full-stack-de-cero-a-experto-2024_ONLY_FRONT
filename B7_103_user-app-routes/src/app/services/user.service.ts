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
    },
    {
      id : 3,
      name : 'zzzzzzzzzz',
      lastname : 'rrrrrrrrrrrrrr',
      email : 'zzzzzzzz@gmail.jp',
      username : 'uuuuuuuuuu',
      password : '123456'
    },
    {
      id : 4,
      name : 'eeeeeeeeeee',
      lastname : 'bbbbbbbbbbbbbb',
      email : 'eeeeeeeeeeee@gmail.jp',
      username : 'fffffffffffff',
      password : '123456'
    },
    {
      id : 5,
      name : 'iiiiiiiiiiii',
      lastname : 'jjjjjjjjjjjjjj',
      email : 'iiiiiiiiiiii@gmail.jp',
      username : 'mmmmmmmmmmmmmmm',
      password : '123456'
    }
  ];


  constructor() {}

  findAll() : Observable<User[]> {
    return of(this.users);
  } 

}
