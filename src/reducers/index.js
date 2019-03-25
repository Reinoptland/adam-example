import  { combineReducers } from 'redux';
import fetchConfigurationReducer from './fetchConfigurationReducer';
import fetchPopularMoviesReducer from './fetchPopularMoviesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	configuration : fetchConfigurationReducer,
	popularMovies : fetchPopularMoviesReducer,
	searchResults : fetchMoviesReducer
});