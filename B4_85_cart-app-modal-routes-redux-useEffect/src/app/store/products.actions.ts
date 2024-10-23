import { createAction, props } from "@ngrx/store";

export const load = createAction('load');                                 //con useEffect

export const findAll = createAction('findAll', props< {products : any} >());            //sin useEffect

