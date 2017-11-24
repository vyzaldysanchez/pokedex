import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import { Chip } from 'react-md';

export class PokedexTypesFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			types: []
		};

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
				className="md-paper--1"
				onClick={() => onPokemonTypeSelected(type.id)}
			/>
		);
	}

	componentDidMount() {
		pokemonTypes.getAll().then(types => this.setState({ types }));
	}

	render() {
		return (
			<div className="pokedex-search-filter" style={{ marginTop: 10 }}>
				{this.state.types.map(this.renderChip)}
			</div>
		);
	}
}

PokedexTypesFilter.propTypes = {
	onTypeSelected: PropTypes.func
};
