import React from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import { withSearchData } from '../../pokedex/state-props-mappers';
import { PokedexSearchDetails } from './PokedexSearchDetails';
import { TWELVE_COLUMNS } from '../../../utils/ui-columns';
import { LabelChip } from '../../shared/LabelChip';
import { REMOVE_POKEMON_TYPE_FILTER } from '../../pokedex/actions';
import { PokemonCard } from '../../pokedex/pokemons/pokemon-card/PokemonCard';

function PokedexList(props) {
  function removePokemonType(type) {
		props.dispatch({
			type: REMOVE_POKEMON_TYPE_FILTER,
			payload: type,
		});
  }

  function renderTypes() {
		const { pokemonTypes } = props.filters;

		return pokemonTypes.map((type, index) => (
			<LabelChip
				backgroundColor={type.color}
				label={type.name}
				key={index}
				style={{ margin: 2, cursor: 'pointer' }}
				onClick={() => removePokemonType(type)}
			/>
		));
  }

  return (
    <Grid>
      <Cell size={TWELVE_COLUMNS}>
        <PokedexSearchDetails
          searching={props.filters.search}
          types={renderTypes()}
        />
      </Cell>

      <Cell size={TWELVE_COLUMNS}>
        {props.pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </Cell>
    </Grid>
  );
}

export default connect(withSearchData.mapStateToProps)(PokedexList);
