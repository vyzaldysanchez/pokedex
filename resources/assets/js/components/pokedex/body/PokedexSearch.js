import React, { Component } from 'react';
import { FontIcon, TextField } from 'react-md';
import axios from 'axios';
import { PokedexTypesFilter } from './PokedexTypesFilter';

export class PokedexSearch extends Component {
	constructor(props) {
		super(props);

		this.state = { pokemonTypesSelected: [], search: '' };

		this.searchByPokemonType = this.searchByPokemonType.bind(this);
	}

	searchByPokemonType(type) {
		if (this.state.pokemonTypesSelected.indexOf(type) === -1) {
			this.setState({
				pokemonTypesSelected: [...this.state.pokemonTypesSelected, type]
			});
		}
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
