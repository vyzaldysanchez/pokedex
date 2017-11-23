import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from 'react-md';
import PokedexNav from './PokedexNav';

export class Pokedex extends Component {
	render() {
		return (
			<div>
				<Toolbar
					id="pokemon-toolbar"
					fixed
					colored
					title="Pokedex"
                    titleStyle={{fontWeight: 900}}
					actions={<PokedexNav className="md-paper--2" />}
				/>
			</div>
		);
	}
}

const pokedexContainer = document.getElementById('pokedex-box');

if (pokedexContainer) {
	ReactDOM.render(<Pokedex />, pokedexContainer);
}
