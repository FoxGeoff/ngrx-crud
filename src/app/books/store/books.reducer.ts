import { createReducer } from "@ngrx/store";
import { Books } from "../store/book";
 
export const initialState: ReadonlyArray<Books> = [];
 
export const bookReducer = createReducer(
    initialState
);

/**
 *  (Line: 4) Empty array assigned as initial data of our store.
    (Line: 6) Using 'createReducer' that loads from '@ngrx/store' 
    we created our 'bookReducers' by sending 'initialState' as an input parameter.
 */
