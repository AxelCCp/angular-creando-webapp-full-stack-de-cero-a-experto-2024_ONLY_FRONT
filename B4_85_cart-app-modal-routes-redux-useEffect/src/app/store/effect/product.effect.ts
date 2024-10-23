import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../services/product.service";
import { findAll, load } from "../products.actions";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";

//86 - el ProductsEffect se registra en el app.config.ts

//86 - "SOLUCION DE ERROR"

//el useEffect va a dar un ERROR. no va a reconocer el pipe(), para esto haz esto:

/*
    en tsconfig.json, agregar en "compilerOptions"  lo siguiente : 
    
    "useDefineForClassFields": false
*/

@Injectable()
export class ProductsEffect {


    //86 - loadProduct$ : es del tipo observable por tener $. 
    //86 - pipe() : es un operador del "observable reactivo" actions$ y q permite manipular el flujo de manera reactiva.
    loadProduct$ = createEffect(
        () => this.actions$.pipe(
            //86 - cuando el flujo sea del tipo "load", que haga algo. Que se ejecute este efecto colateral load. Entonces cuando se despache el load() en el catalog.component.ts,  va a gatillar este effect.
            ofType(load),
            //86 - se modifica este flujo de acciones llamando al service. La llamada al service se envuelve en un of() pq se necesita una respuesta asincrona desde el service,  por lo tanto se e of() para devolver un Observable<product.>
            //86 - exhaustMap() : con este metodo se hace la llamada al service y no permite otra llamada al service, hasta q el service haya completado su tarea y haya devuelto una respuesta desde el back.
            exhaustMap(() => this.service.findAll())
        )
        //86 - se vuelve a llamar al pipe() para hacer algo con este nuevo flujo.
        .pipe(
            //86 - map() : nos permite hacer algo con los productos.  Se llama a la accion "findAll"  y la accion pasa los productos al reducer y lo ejecuta.
            map(products => (findAll( {products : products} ))),
            catchError(() => EMPTY)
        )
    );

    //86-actions$ es un componente reactivo, o sea un componente observable. 
    constructor(private actions$ : Actions, private service : ProductService) {}

}