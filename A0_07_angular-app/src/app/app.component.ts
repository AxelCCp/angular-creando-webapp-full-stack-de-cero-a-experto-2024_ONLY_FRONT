import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Hola mundo - angular-app';
  age : number = 34;
  
  //12
  users : string[] = ['pepe', 'maria', 'juan', 'andres'];
  users2 : string[] = [];                                             //tabla inicializada vacia.
  users3? : string[];                                                 //tabla indefinida.

  //13
  visible : boolean = false;

  setVisible() : void {
    this.visible = this.visible ? false : true;
    console.log('click en setVisible');
  }

}
