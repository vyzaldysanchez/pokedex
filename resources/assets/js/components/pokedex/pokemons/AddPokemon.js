import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import {
	THREE_COLUMNS,
	SIX_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { AddPokemonForm } from './AddPokemonForm';
import { LOAD_POKEMON_TYPES } from '@pokedex/assets/js/components/pokedex/actions';
import { withPokemonTypesMapper } from '@pokedex/assets/js/components/pokedex/state-props-mappers';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';

class AddPokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numberMin: 1,
			pokemon: {
				name: '',
				typesIds: [],
				age: 0,
				pounds: 0.0,
				captured: false,
				public: false,
				image: '',
				imageName: '',
				description: ''
			}
		};
		this.handleTypeSelection = this.handleTypeSelection.bind(this);
	}

	componentDidMount() {
		if (!this.props.pokemonTypes.length) {
			pokemonTypes.getAll().then(types =>
				this.props.dispatch({
					type: LOAD_POKEMON_TYPES,
					payload: types
				})
			);
		}
	}

	handleTypeSelection(id) {
		let typesIds = this.state.pokemon.typesIds.slice();
		const typeSelectedIndex = typesIds.indexOf(id);

		if (typeSelectedIndex > -1) {
			typesIds = pokemonTypes.removeTypeFromCollection(
				typeSelectedIndex,
				typesIds
			);
		} else {
			typesIds.push(id);
		}

		this.setState({ pokemon: { ...this.state.pokemon, typesIds } });
	}

	render() {
		const { height } = styles;

		return (
			<Grid className="add-pokemon-form" style={{ marginTop: height }}>
				<Cell size={SIX_COLUMNS} desktopOffset={THREE_COLUMNS}>
					<h1>Add a Pokemon</h1>

					<AddPokemonForm
						pokemonTypes={this.props.pokemonTypes}
						pokemon={this.state.pokemon}
						onTypeSelection={this.handleTypeSelection}
					/>
				</Cell>
			</Grid>
		);
	}
}

export default connect(withPokemonTypesMapper.mapStateToProps)(AddPokemon);
