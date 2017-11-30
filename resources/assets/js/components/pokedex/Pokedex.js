import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Child, Route } from 'react-router-dom';
import PokedexHeader from './header/PokedexHeader';
import { PokedexBody } from './body/PokedexBody';
import AccountEdit from './body/account/AccountEdit';
import reducer from './reducer';
import { ACCOUNT_EDIT, ADD_POKEMON } from './routes-paths';
import AddPokemon from './pokemons/AddPokemon';
import SnackNotification from '@pokedex/assets/js/components/shared/SnackNotification';

export const Pokedex = () => (
	<Provider store={createStore(reducer)}>
		<Router>
			<Route
				render={props => (
					<div>
						<PokedexHeader
							sendToHome={() => props.history.push('/')}
							sendToAccountEdit={() =>
								props.history.push(ACCOUNT_EDIT)
							}
							sendToAddPokemon={() =>
								props.history.push(ADD_POKEMON)
							}
						/>

						<Route exact path="/" component={PokedexBody} />
						<Route path={ACCOUNT_EDIT} component={AccountEdit} />
						<Route path={ADD_POKEMON} component={AddPokemon} />

						<SnackNotification />
					</div>
				)}
			/>
		</Router>
	</Provider>
);

const pokedexContainer = document.getElementById('pokedex-box');

if (pokedexContainer) {
	ReactDOM.render(<Pokedex />, pokedexContainer);
}
