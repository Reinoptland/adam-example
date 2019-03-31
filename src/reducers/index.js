import  { combineReducers } from 'redux';
import fetchConfigurationReducer from './fetchConfigurationReducer';
import fetchGenresArrayReducer from './fetchGenresArrayReducer';
import fetchPopularMoviesReducer from './fetchPopularMoviesReducer';
import fetchTopRatedMoviesReducer from './fetchTopRatedMoviesReducer';
import fetchUpcomingMoviesReducer from './fetchUpcomingMoviesReducer';
import fetchMoviesReducer from './fetchMoviesReducer';
import fetchMovieDetailsReducer from './fetchMovieDetailsReducer';
import fetchMovieCreditsReducer from './fetchMovieCreditsReducer';
import fetchMovieTrailerReducer from './fetchMovieTrailerReducer';
import fetchRandomMoviesReducer from './fetchRandomMoviesReducer';
import fetchTrendingMoviesReducer from './fetchTrendingMoviesReducer';

export default combineReducers({
	configuration : fetchConfigurationReducer,
	genresArray : fetchGenresArrayReducer,
	popularMovies : fetchPopularMoviesReducer,
	topRatedMovies : fetchTopRatedMoviesReducer,
	upcomingMovies : fetchUpcomingMoviesReducer,
	searchResults : fetchMoviesReducer,
	movieDetails : fetchMovieDetailsReducer,
	movieCredits : fetchMovieCreditsReducer,
	movieTrailer : fetchMovieTrailerReducer,
	randomMovies : fetchRandomMoviesReducer,
	trendingMovies : fetchTrendingMoviesReducer
});