import { createReducer, on } from "@ngrx/store"
import { CartItems } from "../models/cartItem"
import { add, remove, total } from "./items.actions"

export interface ItemsState {
    items : CartItems[],
    total : number
}

export const initialState : ItemsState = {
    items : JSON.parse(sessionStorage.getItem('cart')! || '[]'),
    total : 0,
}

export const itemsReducer = createReducer(

    initialState,
    
    on(add, (state, {product}) => {                                        //78 -  el state es del tipo ItemsState       //{product} : este es payload q se desestructura en producto.

        const hasItem = state.items.find((item : CartItems) => {

            return item.product.id === product.id;

        });

        if(hasItem) {
  
            return { 
                
                items : state.items.map((item : CartItems) => {
                
                    if(item.product.id === product.id) {
                    return {
                        ...item,
                        quantity : item.quantity + 1
                    }
                }
                return item;
            }),

            total : state.total
        }
      
        } else {

            return {
                items : [... state.items, { product : {...product}, quantity : 1}], total : state.total         // {...product} se pasa un clon del producto original  //product : {...product} los datos q se esparcieron, se pasan al atributo product, q es una nueva instancia de product.    //todo esto se hace para la inmutabilidad.
            };

        }

    }),

    on(remove, (state, {id}) => {
        return {
            items : state.items.filter(item => item.product.id !== id),
            total : state.total
        }
    }),

    on(total, state => {
        return {
            items : state.items,        //aqui solo se calcula el total,  por lo tanto se devuelven los mismos items.
            total : state.items.reduce( (accumulator, item) => accumulator + item.product.price * item.quantity, 0)
        }
    })

)