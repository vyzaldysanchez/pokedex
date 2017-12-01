import React, { Component } from 'react';
import { Cell, Grid } from 'react-md';
import axios from 'axios';
import {
	THREE_COLUMNS,
	NINE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';
import PokedexSearch from './PokedexSearch';
import pokemons from '@pokedex/assets/js/services/pokemons.service';
import PokedexList from './PokedexList';

export class PokedexBody extends Component {
	constructor(props) {
		super(props);

		this.state = { pokemons: [] };
	}

	componentDidMount() {
		pokemons.getAll().then(pokemons => this.setState({ pokemons }));
	}

	render() {
		const { height } = styles;
		const { pokemons } = this.state;

		return (
			<Grid
				noSpacing
				className="pokedex-body"
				style={{ marginTop: height }}
			>
				<Cell size={NINE_COLUMNS}>
					<PokedexList pokemons={pokemons} />
				</Cell>
				<Cell size={THREE_COLUMNS}>
					<PokedexSearch />
				</Cell>
			</Grid>
		);
	}
}
