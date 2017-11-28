import React, { Component } from 'react';
import { Cell, Grid } from 'react-md';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import { EIGHT_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { AddPokemonForm } from './AddPokemonForm';

export class AddPokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numberMin: 1,
			pokemonTypes: [],
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
		pokemonTypes
			.getAll()
			.then(pokemonTypes => this.setState({ pokemonTypes }));
	}

	handleTypeSelection(id) {
		let typesIds = this.state.pokemon.typesIds.slice();
		const typeSelectedIndex = typesIds.indexOf(id);

		if (typeSelectedIndex > -1) {
			typesIds = [
				...typesIds.slice(0, typeSelectedIndex),
				...typesIds.slice(typeSelectedIndex + 1)
			];
		} else {
			typesIds.push(id);
		}

		const pokemon = { ...this.state.pokemon, typesIds };

		this.setState({ pokemon: { ...this.state.pokemon, typesIds } });
	}

	render() {
		return (
			<Grid>
				<Cell size={EIGHT_COLUMNS}>
					<h1>Add a Pokemon</h1>

					<AddPokemonForm
						pokemonTypes={this.state.pokemonTypes}
						pokemon={this.state.pokemon}
						onTypeSelection={this.handleTypeSelection}
					/>
				</Cell>
			</Grid>
		);
	}
}
