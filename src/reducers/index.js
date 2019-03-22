import  { combineReducers } from 'redux';
import fetchGenresReducer from './fetchGenresReducer';
import collectSearchValuesReducer from './collectSearchValuesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	genresArray : fetchGenresReducer,
	searchValues : collectSearchValuesReducer,
	searchResults : fetchMoviesReducer
});