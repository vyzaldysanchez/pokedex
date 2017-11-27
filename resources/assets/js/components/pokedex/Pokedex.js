import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Child, Route } from 'react-router-dom';
import { PokedexHeader } from './header/PokedexHeader';
import { PokedexBody } from './body/PokedexBody';

export const Pokedex = () => (
	<Router>
		<Route
			render={props => (
				<div>
					<PokedexHeader
						sendToAccountEdit={() =>
							props.history.push('/account/edit')
						}
					/>

					<Route exact path="/" component={PokedexBody} />
					<Route path="" />
				</div>
			)}
		/>
	</Router>
);

const pokedexContainer = document.getElementById('pokedex-box');

if (pokedexContainer) {
	ReactDOM.render(<Pokedex />, pokedexContainer);
}
