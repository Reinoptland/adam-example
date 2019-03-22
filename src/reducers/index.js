import  { combineReducers } from 'redux';
import fetchGenresReducer from './fetchGenresReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	genresArray : fetchGenresReducer,
	searchResults : fetchMoviesReducer
});