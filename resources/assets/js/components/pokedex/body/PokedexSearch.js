import React, { Component } from 'react';
import { FontIcon, TextField } from 'react-md';
import axios from 'axios';
import PokedexTypesFilter from './PokedexTypesFilter';
import { connect } from 'react-redux';
import { ADD_POKEMON_TYPE_FILTER } from '@pokedex/assets/js/components/pokedex/actions';

export class PokedexSearch extends Component {
	constructor(props) {
		super(props);

		this.state = { search: '' };

		this.searchByPokemonType = this.searchByPokemonType.bind(this);
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
					value={this.state.search}
					onChange={search => this.setState({ search })}
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
		pokemonTypes: []
	}
});

export default connect(mapStateToProps)(PokedexSearch);
