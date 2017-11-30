export const withPokemonTypesMapper = {
	mapStateToProps(state) {
		return { ...state, pokemonTypes: state.pokemonTypes || [] };
	}
};

export const withNotifications = {
	mapStateToProps(state) {
		const { toasts, autohide } = state.notifications || {};

		return {
			...state,
			notifications: {
				toasts: toasts || [],
				autohide: autohide || false
			}
		};
	}
};

export const withPokemonTypesAndNotification = {
	mapStateToProps(state) {
		return {
			...withPokemonTypesMapper.mapStateToProps(state),
			...withNotifications.mapStateToProps(state)
		};
	}
};
