import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cell, FontIcon, Grid } from 'react-md';
import { withSearchData } from '../../pokedex/state-props-mappers';
import { PokedexSearchDetails } from './PokedexSearchDetails';
import { TWELVE_COLUMNS } from '../../../utils/ui-columns';
import { LabelChip } from '../../shared/LabelChip';
import { REMOVE_POKEMON_TYPE_FILTER } from '../../pokedex/actions';
import { PokemonCard } from '../../pokedex/pokemons/pokemon-card/PokemonCard';

class PokedexList extends Component {
	constructor(props) {
		super(props);

		this.removePokemonType = this.removePokemonType.bind(this);
	}

	renderTypes() {
		const { pokemonTypes } = this.props.filters;

		return pokemonTypes.map((type, index) => (
			<LabelChip
				backgroundColor={type.color}
				label={type.name}
				key={index}
				style={{ margin: 2, cursor: 'pointer' }}
				onClick={() => this.removePokemonType(type)}
			/>
		));
	}

	removePokemonType(type) {
		this.props.dispatch({
			type: REMOVE_POKEMON_TYPE_FILTER,
			payload: type
		});
	}

	render() {
		const { search, pokemonTypes } = this.props.filters;

		return (
			<Grid>
				<Cell size={TWELVE_COLUMNS}>
					<PokedexSearchDetails
						searching={search}
						types={this.renderTypes()}
					/>
				</Cell>

				<Cell size={TWELVE_COLUMNS}>
					{this.props.pokemons.map((pokemon, index) => (
						<PokemonCard key={index} pokemon={pokemon} />
					))}
				</Cell>
			</Grid>
		);
	}
}

export default connect(withSearchData.mapStateToProps)(PokedexList);
