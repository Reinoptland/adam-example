export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_POPULAR_MOVIES':
			return action.payload;
		case 'FETCH_ALL':
			return action.payload.popular
		default:
			return state;
	}
};