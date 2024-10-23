import { createReducer, on } from "@ngrx/store"
import { findAll, load } from "./products.actions"


const products : any[] = [];

const initialState = { 
    products : products 
}


export const productsReducer = createReducer(
    
    initialState,
    
    /*
    on(load, (state) => {
        return {
            products : [...state.products]                    //devuelve los productos actuales.
        }
    }),
    */

    on(load, (state) => ({products : [...state.products] })),

    /*
    on(findAll, (state, payload) => {
        return {
            products : [... payload.products]
        }
    })
    */

    on(findAll, (state, {products}) => ({products : [...products] })),
)