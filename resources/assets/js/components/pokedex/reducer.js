import { LOAD_USER } from './actions';

export default (state = { user: null }, action) => {
	switch (action.type) {
		case LOAD_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
