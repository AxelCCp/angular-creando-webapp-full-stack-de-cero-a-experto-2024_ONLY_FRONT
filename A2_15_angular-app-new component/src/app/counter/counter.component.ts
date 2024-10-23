import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit{                                    //16.para implementar un metodo en esta clase componente q nos permita inicializar el componente. Es como un constructor,  pero orientado al ciclo de vida de los compoenentes de angular.

  //sessionStorage:guarda datos en el navegador.
  //localStorage:guarda datos en el equipo del usuario.

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;                                                 //aqui aparece un error del compilador, pero el código esta bn. //se usa ! para que tome el valor por defecto 0.   //al inicio el contador siempre va a ser 0 y luego lo va a tomas de la session.
    //this.counter = localStorage.getItem('counter') != undefined ? parseInt(localStorage.getItem('counter')!) : 0;   //con ternario.
    console.log('creado componente')
  }

  setCounter() : void {
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmit.emit(this.counter);                                            //18.se transmite la informacion al comp padre.
  }

  counter : number = 0;
  @Input() title! : string;                                                         //17.se usa traer la informacion del padre al hijo.   //17.  "!" para que no dé error de compilación.
        
  @Output() counterEmit : EventEmitter<number> = new EventEmitter();                //18.se usa para transmitir info desde el hijp al padre.

}
