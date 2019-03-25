export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_TOP_RATED_MOVIES':
			return action.payload;
		default:
			return state;
	}
};