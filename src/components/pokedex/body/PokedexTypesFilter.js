import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import pokemonTypes from '../../../services/pokemon-types.service';
import { LOAD_POKEMON_TYPES } from '../../pokedex/actions';
import { withPokemonTypesMapper } from '../../pokedex/state-props-mappers';
import { LabelChip } from '../../shared/LabelChip';

function PokedexTypesFilter({
  onPokemonTypeSelected,
  pokemonTypes: types,
  dispatch,
}) {
  useEffect(() => {
    if (!types.length) {
			pokemonTypes.getAll().then(types =>
				dispatch({
					type: LOAD_POKEMON_TYPES,
					payload: types,
				}),
			);
		}
  }, [types, dispatch]);

  function renderChip(type, index) {
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

  return (
    <div className="pokedex-search-filter" style={{ marginTop: 10 }}>
      {types.map(renderChip)}
    </div>
  );
}

PokedexTypesFilter.propTypes = {
	onTypeSelected: PropTypes.func,
};

export default connect(withPokemonTypesMapper.mapStateToProps)(
	PokedexTypesFilter,
);
