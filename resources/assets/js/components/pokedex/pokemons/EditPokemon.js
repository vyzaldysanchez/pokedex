import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withPokemonTypesAndNotification } from '@pokedex/assets/js/components/pokedex/state-props-mappers';
import AddPokemon from './AddPokemon';

class EditPokemon extends Component {
	render() {
		return <AddPokemon edit pokemonId={this.props.match.params.id} />;
	}
}

export default connect(withPokemonTypesAndNotification.mapStateToProps)(
	EditPokemon
);
