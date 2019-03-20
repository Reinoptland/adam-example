export default(state = [], action) => {
	switch(action.type) {
		case 'COLLECT_SEARCH_VALUES':
			return action.values;
		default:
			return state;
	}
};