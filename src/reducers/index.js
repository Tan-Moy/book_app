import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;

//creates application state i.e wires up the reducer data to the app