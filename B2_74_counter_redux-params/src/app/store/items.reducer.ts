import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

//72

export const initialState = 0;

export const counterReducer = createReducer(
    
    initialState,
    
    /*
    on(increment, (state, payload) => {                              //recibe el state actual y el payload
        return state + payload.add;                                  //se retorna un nuevo estado + lo q contenga el payload                                        
    }),
    */

    on(increment, (state, {add}) => {                               //se desestructura el payload y se toma directamete el add. 
        return state + add;                                                                            
    }),

    on(decrement, (state) => {
        return state - 1;
    }),

    on(reset, (state) => {
        return 0;
    })
);