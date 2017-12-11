import {
	LOAD_USER,
	LOAD_POKEMON_TYPES,
	REMOVE_NOTIFICATION,
	ADD_NOTIFICATION,
	ADD_POKEMON_TYPE_FILTER,
	ADD_SEARCH_TEXT_FILTER,
	REMOVE_POKEMON_TYPE_FILTER,
	SEARCH,
	SEARCHING_POKEMONS,
	POKEMONS_FOUND
} from './actions';
import {
	addNotification,
	removeNotification
} from './reducers/notifications.reducer';
import {
	addPokemonTypeToFilter,
	removePokemonTypeToFilter,
	addSearchText,
	setPokemonsSearchStatus,
	addPokemons
} from './reducers/pokemon-search.reducer';

const initialState = {
	user: null,
	pokemonTypes: [],
	notifications: {
		toasts: [],
		autohide: true
	},
	filters: {
		search: '',
		pokemonTypes: []
	},
	pokemons: {},
	searchingPokemons: false
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
		case ADD_SEARCH_TEXT_FILTER:
			return addSearchText(state, action.payload);
		case ADD_POKEMON_TYPE_FILTER:
			return addPokemonTypeToFilter(state, action.payload);
		case REMOVE_POKEMON_TYPE_FILTER:
			return removePokemonTypeToFilter(state, action.payload);
		case SEARCHING_POKEMONS:
			return setPokemonsSearchStatus(state, action.payload);
		case POKEMONS_FOUND:
			return addPokemons(state, action.payload);
		default:
			return state;
	}
};
