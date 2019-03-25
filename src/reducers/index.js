import  { combineReducers } from 'redux';
import fetchPopularMoviesReducer from './fetchPopularMoviesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	popularMovies : fetchPopularMoviesReducer,
	searchResults : fetchMoviesReducer
});