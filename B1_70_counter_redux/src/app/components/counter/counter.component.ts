import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {


  title : string = "Counter with redux";
  counter : number;

  
  constructor(private store : Store<{counter : number}>) {        //Store<{counter : number}>   :  angular puede tener store's de diferentes tipos,  pos eso se define el {counter : number}. 
    this.counter = 0;                                             //se puede inicializar "= a 0" en la variable o en el constructor.
    this.store.select('counter').subscribe(counter => {           //con esto nos suscribimos y escuchamos cualquier cambio q pueda tener el contador.  "counter =>" : este counter es el estado q maneja redux para el contador y luego se asigna el counter de redux al contador de este componente. La asignación del valor se aplica en el contexto de subscribe(). Al poner esto en el constructor,  no se está asignando nada, solo se esta poniendo a la escucha.  
      this.counter = counter;
    });                      
  }


  increment() : void {
    //this.counter++;
    this.store.dispatch(increment());         //en Item.action.ts se definió la accion increment y en el items.reducer.ts se define el counter reducer. En el items.reducer.ts está el estado inicial del contador y con el increment se suma 1 al estado.
    console.log('incrementando...');
  }

  decrement() : void {
    //this.counter--;
    this.store.dispatch(decrement());
    console.log('decrementando...');
  }

  reset () : void {
    //this.counter = 0;
    this.store.dispatch(reset());
    console.log('reset de contador...');
  }
}
