import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

//72

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {                              //recibe el state actual.
        return state + 1;                                   //se retorna un nuevo estado + 1.                                         
    }),
    on(decrement, (state) => {
        return state - 1;
    }),
    on(reset, (state) => {
        return 0;
    })
);