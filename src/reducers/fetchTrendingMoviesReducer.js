export default(state = [], action) => {
	switch(action.type) {
		case 'FETCH_TRENDING_MOVIES':
			return action.payload;
		default:
			return state;
	}
};