import  { combineReducers } from 'redux';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	searchResults : fetchMoviesReducer
});