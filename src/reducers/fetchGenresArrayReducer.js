export default(state = {}, action) => {
	switch(action.type) {
		case 'FETCH_GENRES_ARRAY':
			return action.payload;
		default:
			return state;
	}
};