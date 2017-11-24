import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PokedexHeader } from './header/PokedexHeader';
import { PokedexBody } from './body/PokedexBody';

export const Pokedex = () => (
	<div>
		<PokedexHeader />
		<PokedexBody />
	</div>
);

const pokedexContainer = document.getElementById('pokedex-box');

if (pokedexContainer) {
	ReactDOM.render(<Pokedex />, pokedexContainer);
}
