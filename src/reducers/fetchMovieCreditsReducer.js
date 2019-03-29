export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_MOVIE_CREDITS':
			return action.payload;
		default:
			return state;
	}
};