import React, { Component } from 'react';
import { Cell, Grid } from 'react-md';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import { EIGHT_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { AddPokemonForm } from './AddPokemonForm';

export class AddPokemon extends Component {
	constructor(props) {
		super(props);

		this.state = { numberMin: 1, fileName: '', pokemonTypes: [] };
	}

	componentDidMount() {
		pokemonTypes
			.getAll()
			.then(pokemonTypes => this.setState({ pokemonTypes }));
	}

	render() {
		return (
			<Grid>
				<Cell size={EIGHT_COLUMNS}>
					<h1>Add a Pokemon</h1>

					<AddPokemonForm pokemonTypes={this.state.pokemonTypes} />
				</Cell>
			</Grid>
		);
	}
}
