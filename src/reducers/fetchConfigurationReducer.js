export default(state = {}, action) => {
	switch(action.type) {
		case 'FETCH_CONFIGURATION':
			return action.payload;
		default:
			return state;
	}
};