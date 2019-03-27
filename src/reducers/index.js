import  { combineReducers } from 'redux';
import fetchConfigurationReducer from './fetchConfigurationReducer';
import fetchGenresArrayReducer from './fetchGenresArrayReducer';
import fetchPopularMoviesReducer from './fetchPopularMoviesReducer';
import fetchTopRatedMoviesReducer from './fetchTopRatedMoviesReducer';
import fetchUpcomingMoviesReducer from './fetchUpcomingMoviesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';

export default combineReducers({
	configuration : fetchConfigurationReducer,
	genresArray : fetchGenresArrayReducer,
	popularMovies : fetchPopularMoviesReducer,
	topRatedMovies : fetchTopRatedMoviesReducer,
	upcomingMovies : fetchUpcomingMoviesReducer,
	searchResults : fetchMoviesReducer
});