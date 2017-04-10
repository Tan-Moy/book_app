import { combineReducers } from 'redux';
//combineReducer method ties all the reducers together
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook:ActiveBook
});

export default rootReducer;

//creates application state i.e wires up the reducer data to the app application state is completely different than component state of react.