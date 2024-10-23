import { createReducer, on } from "@ngrx/store"
import { load } from "./products.actions"


const products : any[] = [];

const initialState = { 
    products : products 
}


export const productsReducer = createReducer(
    initialState,
    on(load, (state, payload) => {
        return {
            products : [... payload.products]
        }
    })
)