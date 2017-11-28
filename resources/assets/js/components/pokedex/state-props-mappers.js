export const withPokemonTypesMapper = {
	mapStateToProps(state) {
		return { pokemonTypes: state.pokemonTypes || [] };
	}
};
