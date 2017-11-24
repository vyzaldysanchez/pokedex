import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
		axios.get('/api/pokemons/types').then(({ data }) => {
			this.setState({
				types: data || []
			});
		});
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
