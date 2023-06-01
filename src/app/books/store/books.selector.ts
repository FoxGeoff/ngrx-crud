import { createFeatureSelector } from '@ngrx/store';
import { Books } from './book';
 
export const selectBooks = createFeatureSelector<Books[]>('mybooks');

/**
 * The 'createFeatureSelector' loads from the '@ngrx/store'. 
 * The 'createFeatureSelector' is used to fetch all the data 
 * from our feature module(eg: 'Books' module). 
 * Here the name of our selector 'mybooks' must be 
 * used to register the 'bookReducer' into the 
 * 'books.modulet.ts' to register the feature store or child store.
 * 
 * Now register the reducer(eg: bookReducer) 
 * and feature selector name(eg: 'mybooks') 
 * in the feature store module.
 * 
 * src/app/books/book.module.ts:
 */