import  { combineReducers } from 'redux';
import fetchConfigurationReducer from './fetchConfigurationReducer';
import fetchPopularMoviesReducer from './fetchPopularMoviesReducer';
import fetchTopRatedMoviesReducer from './fetchTopRatedMoviesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	configuration : fetchConfigurationReducer,
	popularMovies : fetchPopularMoviesReducer,
	topRatedMovies : fetchTopRatedMoviesReducer,
	searchResults : fetchMoviesReducer
});