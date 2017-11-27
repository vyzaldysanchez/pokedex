import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Child, Route } from 'react-router-dom';
import PokedexHeader from './header/PokedexHeader';
import { PokedexBody } from './body/PokedexBody';
import AccountEdit from './body/account/AccountEdit';
import reducer from './reducer';

export const Pokedex = () => (
	<Provider store={createStore(reducer)}>
		<Router>
			<Route
				render={props => (
					<div>
						<PokedexHeader
							sendToHome={() => props.history.push('/')}
							sendToAccountEdit={() =>
								props.history.push('/account/edit')
							}
						/>

						<Route exact path="/" component={PokedexBody} />
						<Route path="/account/edit" component={AccountEdit} />
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
