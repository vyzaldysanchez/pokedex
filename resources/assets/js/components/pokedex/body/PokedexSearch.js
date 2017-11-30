import React, { Component } from 'react';
import { FontIcon, TextField } from 'react-md';
import axios from 'axios';
import PokedexTypesFilter from './PokedexTypesFilter';
import { connect } from 'react-redux';
import {
	ADD_POKEMON_TYPE_FILTER,
	ADD_SEARCH_TEXT_FILTER
} from '@pokedex/assets/js/components/pokedex/actions';

export class PokedexSearch extends Component {
	constructor(props) {
		super(props);

		this.search = this.search.bind(this);
		this.searchByPokemonType = this.searchByPokemonType.bind(this);
	}

	search(text) {
		this.props.dispatch({ type: ADD_SEARCH_TEXT_FILTER, payload: text });
	}

	searchByPokemonType(type) {
		this.props.dispatch({ type: ADD_POKEMON_TYPE_FILTER, payload: type });
	}

	render() {
		return (
			<div className="pokedex-search">
				<TextField
					id="pokedex-search-box"
					type="search"
					leftIcon={<FontIcon>search</FontIcon>}
					label="Search by name/description..."
					value={this.props.search}
					onChange={this.search}
				/>

				<PokedexTypesFilter
					onPokemonTypeSelected={this.searchByPokemonType}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	filters: {
		search: '',
		pokemonTypes: []
	}
});

export default connect(mapStateToProps)(PokedexSearch);
