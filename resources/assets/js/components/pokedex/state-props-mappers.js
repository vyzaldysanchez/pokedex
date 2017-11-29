export const withPokemonTypesMapper = {
	mapStateToProps(state) {
		return { ...state, pokemonTypes: state.pokemonTypes || [] };
	}
};
