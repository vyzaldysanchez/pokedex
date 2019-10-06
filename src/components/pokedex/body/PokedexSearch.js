import React from 'react';
import { Button, Cell, FontIcon, Grid, TextField } from 'react-md';
import { connect } from 'react-redux';
import {
  ADD_POKEMON_TYPE_FILTER,
	ADD_SEARCH_TEXT_FILTER,
} from '../../pokedex/actions';
import PokedexTypesFilter from './PokedexTypesFilter';
import { TWELVE_COLUMNS } from '../../../utils/ui-columns';
import { searchPokemons } from '../../pokedex/reducers/pokemon-search.reducer';

function PokedexSearch(props) {
  function addSearchTextFilter(text) {
		props.dispatch({ type: ADD_SEARCH_TEXT_FILTER, payload: text });
	}

	function addPokemonTypeFilter(type) {
		props.dispatch({ type: ADD_POKEMON_TYPE_FILTER, payload: type });
	}

	function triggerSearch() {
		props.searchPokemons(props);
  }

  function renderSearchIcon() {
		return <FontIcon>search</FontIcon>;
  }

  return (
    <Grid className="pokedex-search">
      <Cell size={TWELVE_COLUMNS}>
        <TextField
          id="pokedex-search-box"
          type="search"
          leftIcon={renderSearchIcon()}
          label="Search by name/description..."
          value={props.search}
          onChange={addSearchTextFilter}
        />
      </Cell>

      <Cell size={TWELVE_COLUMNS}>
        <PokedexTypesFilter onPokemonTypeSelected={addPokemonTypeFilter} />
      </Cell>

      <Cell size={TWELVE_COLUMNS}>
        <Button
          raised
          primary
          iconBefore
          iconEl={renderSearchIcon()}
          className="center-block"
          onClick={triggerSearch}
        >
          Search
        </Button>
      </Cell>
    </Grid>
  );
}

const mapStateToProps = state => ({
	...state,
	filters: {
		...state.filters,
		search: state.filters.search,
		pokemonTypes: state.filters.pokemonTypes,
	},
});

const mapDispatchToProps = dispatch => ({
	searchPokemons: props => dispatch(searchPokemons(props)),
	dispatch: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexSearch);
