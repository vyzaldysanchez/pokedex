import React, { Component } from 'react';
import { Cell, Grid } from 'react-md';
import axios from 'axios';
import {
	THREE_COLUMNS,
	NINE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';
import PokedexList from './PokedexList';
import PokedexSearch from './PokedexSearch';

export class PokedexBody extends Component {
	render() {
		const { height } = styles;

		return (
			<Grid
				noSpacing
				className="pokedex-body"
				style={{ marginTop: height }}
			>
				<Cell size={NINE_COLUMNS}>
					<PokedexList />
				</Cell>
				<Cell size={THREE_COLUMNS}>
					<PokedexSearch />
				</Cell>
			</Grid>
		);
	}
}
