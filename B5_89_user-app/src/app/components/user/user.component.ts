import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() users : User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  onRemoveUser(id : number) : void {
    this.idUserEventEmitter.emit(id);
  }

  @Output() selectedUserEventEmitter = new EventEmitter();

  onSelectedUser(user : User) : void {
    this.selectedUserEventEmitter.emit(user);
  }
 
}
