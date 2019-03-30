import axios from 'axios';

export const fetchConfiguration = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/configuration?api_key=${ApiKey}`;

	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_CONFIGURATION', payload : response.data})
	}
}

export const fetchGenresArray = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`;

	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_GENRES_ARRAY', payload : response.data.genres})
	}
}

export const fetchMovies = (selectedGenres, minRating, maxRating, minYear, maxYear, sortById) => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = 	`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-U` +
					`&sort_by=${sortById}&include_adult=false&include_video=false&page=1` +
					`&release_date.gte=${minYear}&release_date.lte=${maxYear}` +
					`&vote_average.gte=${minRating}&vote_average.lte=${maxRating}` +
					`&with_genres=${selectedGenres.toString()}`;

	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIES', payload : response.data.results});

	}
};

export const fetchRandomMovies = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;
	//Create random number between 1 and 1000:
	const pageNumber = Math.floor(Math.random() * 999) + 1;

	const Url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`;
	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_RANDOM_MOVIES', payload : response.data.results});

	}
};

export const fetchMovieDetails = (id) => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`;

	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIE_DETAILS', payload : response.data});

	}
};

export const fetchMovieCredits = (id) => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`;

	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIE_CREDITS', payload : response.data});

	}
};

export const fetchMovieTrailer = (id) => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIE_TRAILER', payload : response.data.results});

	}
};

export const fetchPopularMovies = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
	
	return (dispatch) => {
		axios.get(Url)
			.then( response => {
				return dispatch({type : 'FETCH_POPULAR_MOVIES', payload: response.data.results});
			})
	}
	
};

export const fetchTopRatedMovies = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`;
	
	return (dispatch) => {
		axios.get(Url)
			.then( response => {
				return dispatch({type : 'FETCH_TOP_RATED_MOVIES', payload: response.data.results});
			})
	}
	
};

export const fetchUpcomingMovies = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`;
	
	return (dispatch) => {
		axios.get(Url)
			.then( response => {
				return dispatch({type : 'FETCH_UPCOMING_MOVIES', payload: response.data.results});
			})
	}
	
};