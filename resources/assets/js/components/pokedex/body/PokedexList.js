import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cell, FontIcon, Grid } from 'react-md';
import { withSearchData } from '@pokedex/assets/js/components/pokedex/state-props-mappers';
import { PokedexSearchDetails } from './PokedexSearchDetails';
import { TWELVE_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { LabelChip } from '@pokedex/assets/js/components/shared/LabelChip';
import { REMOVE_POKEMON_TYPE_FILTER } from '@pokedex/assets/js/components/pokedex/actions';

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
			</Grid>
		);
	}
}

export default connect(withSearchData.mapStateToProps)(PokedexList);
