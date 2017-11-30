import {
	LOAD_USER,
	LOAD_POKEMON_TYPES,
	REMOVE_NOTIFICATION,
	ADD_NOTIFICATION,
	ADD_POKEMON_TYPE_FILTER
} from './actions';
import {
	addNotification,
	removeNotification
} from './reducers/notifications.reducer';
import { addPokemonTypeToFilter } from './reducers/pokemon-search.reducer';

const initialState = {
	user: null,
	pokemonTypes: [],
	notifications: {
		toasts: [],
		autohide: true
	},
	filters: {
		pokemonTypes: []
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER:
			return { ...state, user: action.payload };
		case LOAD_POKEMON_TYPES:
			return { ...state, pokemonTypes: action.payload };
		case ADD_NOTIFICATION:
			return addNotification(state, action.payload);
		case REMOVE_NOTIFICATION:
			return removeNotification(state, action.payload);
		case ADD_POKEMON_TYPE_FILTER:
			return addPokemonTypeToFilter(state, action.payload);
		default:
			return state;
	}
};
