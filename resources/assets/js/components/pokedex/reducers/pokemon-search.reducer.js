import axios from 'axios';
import {
	startPokemonsSearch,
	receivePokemons,
	stopPokemonsSearch
} from '@pokedex/assets/js/components/pokedex/actions';

export const addPokemonTypeToFilter = (state, type) => {
	const { pokemonTypes } = state.filters;
	const types =
		pokemonTypes.indexOf(type) === -1
			? [...pokemonTypes, type]
			: [...pokemonTypes];

	return { ...state, filters: { ...state.filters, pokemonTypes: types } };
};

export const removePokemonTypeToFilter = (state, type) => {
	const { pokemonTypes } = state.filters;
	const typeIndex = pokemonTypes.indexOf(type);
	const types =
		typeIndex > -1
			? [
					...pokemonTypes.slice(0, typeIndex),
					...pokemonTypes.slice(typeIndex + 1)
				]
			: [...pokemonTypes];

	return { ...state, filters: { ...state.filters, pokemonTypes: types } };
};

export const addSearchText = (state, text) => ({
	...state,
	filters: { ...state.filters, search: text }
});

export const setPokemonsSearchStatus = (state, searchingPokemons) => ({
	...state,
	searchingPokemons
});

export const searchPokemons = ({ filters }) => {
	return dispatch => {
		dispatch(startPokemonsSearch());

		const typesQuery = filters.pokemonTypes
			.map(type => type.id)
			.join('&pokemonType[]=');

		return axios
			.get(
				`/api/pokemons?search=${filters.search}&pokemonType[]=${
					typesQuery
				}`
			)
			.then(({ data }) =>
				dispatch(
					receivePokemons({
						searchingPokemons: false,
						pokemons: data
					})
				)
			);
	};
};

export const addPokemons = (state, { searchingPokemons, pokemons }) => ({
	...state,
	searchingPokemons,
	pokemons
});
