import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PokedexHeader } from './PokedexHeader';

export class Pokedex extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <PokedexHeader />;
	}
}

const pokedexContainer = document.getElementById('pokedex-box');

if (pokedexContainer) {
	ReactDOM.render(<Pokedex />, pokedexContainer);
}
