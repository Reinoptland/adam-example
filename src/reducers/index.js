import  { combineReducers } from 'redux';
import collectSearchValuesReducer from './collectSearchValuesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	searchValues : collectSearchValuesReducer,
	searchResults : fetchMoviesReducer
});