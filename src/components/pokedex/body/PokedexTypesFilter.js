import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chip } from 'react-md';
import pokemonTypes from '../../../services/pokemon-types.service';
import { LOAD_POKEMON_TYPES } from '../../pokedex/actions';
import { withPokemonTypesMapper } from '../../pokedex/state-props-mappers';
import { LabelChip } from '../../shared/LabelChip';

class PokedexTypesFilter extends Component {
	constructor(props) {
		super(props);

		this.renderChip = this.renderChip.bind(this);
	}

	renderChip(type, index) {
		const onPokemonTypeSelected = this.props.onPokemonTypeSelected;

		return (
			<LabelChip
				backgroundColor={type.color}
				label={type.name}
				key={index}
				style={{
					margin: 2,
					width: '31%',
					display: 'inline-block',
					cursor: 'pointer',
          textOverflow: 'ellipsis',
          overflowX: 'hidden',
				}}
				onClick={() => onPokemonTypeSelected(type)}
			/>
		);
	}

	componentDidMount() {
		if (!this.props.pokemonTypes.length) {
			pokemonTypes.getAll().then(types =>
				this.props.dispatch({
					type: LOAD_POKEMON_TYPES,
					payload: types,
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
	onTypeSelected: PropTypes.func,
};

export default connect(withPokemonTypesMapper.mapStateToProps)(
	PokedexTypesFilter
);