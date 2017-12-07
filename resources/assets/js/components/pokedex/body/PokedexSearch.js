import React, { Component } from 'react';
import { Button, Cell, FontIcon, Grid, TextField } from 'react-md';
import axios from 'axios';
import PokedexTypesFilter from './PokedexTypesFilter';
import { connect } from 'react-redux';
import {
	ADD_POKEMON_TYPE_FILTER,
	ADD_SEARCH_TEXT_FILTER
} from '@pokedex/assets/js/components/pokedex/actions';
import { TWELVE_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { searchPokemons } from '@pokedex/assets/js/components/pokedex/reducers/pokemon-search.reducer';

class PokedexSearch extends Component {
	constructor(props) {
		super(props);

		this.addSearchTextFilter = this.addSearchTextFilter.bind(this);
		this.addPokemonTypeFilter = this.addPokemonTypeFilter.bind(this);
		this.triggerSearch = this.triggerSearch.bind(this);
	}

	addSearchTextFilter(text) {
		this.props.dispatch({ type: ADD_SEARCH_TEXT_FILTER, payload: text });
	}

	addPokemonTypeFilter(type) {
		this.props.dispatch({ type: ADD_POKEMON_TYPE_FILTER, payload: type });
	}

	triggerSearch() {
		this.props.searchPokemons(this.props);
	}

	renderSearchIcon() {
		return <FontIcon>search</FontIcon>;
	}

	render() {
		return (
			<Grid className="pokedex-search">
				<Cell size={TWELVE_COLUMNS}>
					<TextField
						id="pokedex-search-box"
						type="search"
						leftIcon={this.renderSearchIcon()}
						label="Search by name/description..."
						value={this.props.search}
						onChange={this.addSearchTextFilter}
					/>
				</Cell>

				<Cell size={TWELVE_COLUMNS}>
					<PokedexTypesFilter
						onPokemonTypeSelected={this.addPokemonTypeFilter}
					/>
				</Cell>

				<Cell size={TWELVE_COLUMNS}>
					<Button
						raised
						primary
						iconBefore
						iconEl={this.renderSearchIcon()}
						className="center-block"
						onClick={this.triggerSearch}
					>
						Search
					</Button>
				</Cell>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	filters: {
		...state.filters,
		search: state.filters.search,
		pokemonTypes: state.filters.pokemonTypes
	}
});

const mapDispatchToProps = dispatch => ({
	searchPokemons: props => dispatch(searchPokemons(props)),
	dispatch: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexSearch);
