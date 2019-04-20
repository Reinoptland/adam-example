export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_TOP_RATED_MOVIES':
			return action.payload;
		case 'FETCH_ALL':
			return action.payload.toprated
		default:
			return state;
	}
};