import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chip } from 'react-md';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import { LOAD_POKEMON_TYPES } from '@pokedex/assets/js/components/pokedex/actions';
import { withPokemonTypesMapper } from '@pokedex/assets/js/components/pokedex/state-props-mappers';

class PokedexTypesFilter extends Component {
	constructor(props) {
		super(props);

		this.renderChip = this.renderChip.bind(this);
	}

	renderChip(type, index) {
		const onPokemonTypeSelected = this.props.onPokemonTypeSelected;

		return (
			<Chip
				label={type.name}
				key={index}
				style={{ backgroundColor: type.color, width: '30%', margin: 2 }}
				labelStyle={{ width: '100%', textAlign: 'center' }}
				className="md-paper--1 text-capitalize"
				onClick={() => onPokemonTypeSelected(type)}
			/>
		);
	}

	componentDidMount() {
		if (!this.props.pokemonTypes.length) {
			pokemonTypes.getAll().then(types =>
				this.props.dispatch({
					type: LOAD_POKEMON_TYPES,
					payload: types
				})
			);
		}
	}

	render() {
		return (
			<div className="pokedex-search-filter" style={{ marginTop: 10 }}>
				{this.props.pokemonTypes.map(this.renderChip)}
			</div>
		);
	}
}

PokedexTypesFilter.propTypes = {
	onTypeSelected: PropTypes.func
};

export default connect(withPokemonTypesMapper.mapStateToProps)(
	PokedexTypesFilter
);
