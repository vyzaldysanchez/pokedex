import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import { withSearchData } from '@pokedex/assets/js/components/pokedex/state-props-mappers';
import { PokedexSearchDetails } from './PokedexSearchDetails';
import { TWELVE_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';

class PokedexList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { search, pokemonTypes } = this.props.filters;

		return (
			<Grid>
				<Cell size={TWELVE_COLUMNS}>
					<PokedexSearchDetails
						searching={search}
						types={pokemonTypes}
					/>
				</Cell>
			</Grid>
		);
	}
}

export default connect(withSearchData.mapStateToProps)(PokedexList);
