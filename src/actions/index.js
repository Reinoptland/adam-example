import axios from 'axios';

export const fetchGenres = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;
	const Url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`;
	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_GENRES', payload: response.data.genres});
	}
};

export const fetchMovies = (selectedGenres, minRating, maxRating, minYear, maxYear, sortById) => {

	const ApiKey = process.env.REACT_APP_API_KEY;

	const Url = 	`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-U` +
					`&sort_by=${sortById}&include_adult=false&include_video=false&page=1` +
					`&release_date.gte=${minYear}&release_date.lte=${maxYear}` +
					`&vote_average.gte=${minRating}&vote_average.lte=${maxRating}` +
					`&with_genres=${selectedGenres.toString()}`;

	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIES', payload: response.data.results});

	}
};