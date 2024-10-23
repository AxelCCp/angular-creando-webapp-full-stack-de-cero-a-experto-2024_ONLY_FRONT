import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  title : string = 'Hola mundo - angular-app';
  age : number = 34;
  
  //12
  users : string[] = ['pepe', 'maria', 'juan', 'andres'];
  users2 : string[] = [];                                             //tabla inicializada vacia.
  users3? : string[];                                                 //tabla indefinida.

  //13
  visible : boolean = false;

  counter : number = 0;

  setVisible() : void {
    this.visible = this.visible ? false : true;
    console.log('click en setVisible');
  }

  setCounter (eventCounter : number) : void {
    this.counter = eventCounter;
  }

  //17
  subTitle : string = 'Contador con estado de session';                 //17. se pasa dato desde el componente padre al componente hijo

}
