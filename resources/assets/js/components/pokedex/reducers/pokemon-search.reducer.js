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
