export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_UPCOMING_MOVIES':
			return action.payload;
		case 'FETCH_ALL':
			return action.payload.upcoming
		default:
			return state;
	}
};