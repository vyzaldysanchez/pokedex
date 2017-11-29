import { LOAD_USER, LOAD_POKEMON_TYPES } from './actions';

export default (state = { user: null }, action) => {
	switch (action.type) {
		case LOAD_USER:
			return { ...state, user: action.payload };
		case LOAD_POKEMON_TYPES:
			return { ...state, pokemonTypes: action.payload };
		default:
			return state;
	}
};
