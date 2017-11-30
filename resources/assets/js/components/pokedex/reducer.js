import {
	LOAD_USER,
	LOAD_POKEMON_TYPES,
	REMOVE_NOTIFICATION,
	ADD_NOTIFICATION
} from './actions';

export default (state = { user: null }, action) => {
	switch (action.type) {
		case LOAD_USER:
			return { ...state, user: action.payload };
		case LOAD_POKEMON_TYPES:
			return { ...state, pokemonTypes: action.payload };
		case ADD_NOTIFICATION:
			const { autohide, toast } = action.payload;
			const prevToasts = state.notifications
				? state.notifications.toasts
                : [];
                
			return {
				...state,
				notifications: {
					toasts: [...prevToasts, toast],
					autohide
				}
			};
			break;
		case REMOVE_NOTIFICATION:
			const [, ...toasts] = action.payload.toasts; // Removes the first element without mutating!
			return {
				...state,
				notifications: { toasts, autohide: action.payload.autohide }
			};
		default:
			return state;
	}
};
