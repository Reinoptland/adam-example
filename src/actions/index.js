import axios from 'axios';

export const collectSearchValues = values => ({
	type: 'COLLECT_SEARCH_VALUES',
	values
});

export const fetchMovies = () => {

	const ApiKey = process.env.REACT_APP_API_KEY;
	const Url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
	
	return async (dispatch) => {
		const response = await axios.get(Url);
		dispatch({type : 'FETCH_MOVIES', payload: response.data.results});
	}
};