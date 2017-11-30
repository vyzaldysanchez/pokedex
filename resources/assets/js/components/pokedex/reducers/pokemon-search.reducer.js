export const addPokemonTypeToFilter = (state, type) => {
	const { pokemonTypes } = state.filters;
	const types =
		pokemonTypes.indexOf(type) === -1
			? [...pokemonTypes, type]
			: [...pokemonTypes];

	return { ...state, filters: { ...state.filters, pokemonTypes: types } };
};
