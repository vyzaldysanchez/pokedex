export const LOAD_USER = 'LOAD_USER';
export const LOAD_POKEMON_TYPES = 'LOAD_POKEMON_TYPES';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const ADD_POKEMON_TYPE_FILTER = 'ADD_POKEMON_TYPE_FILTER';
export const REMOVE_POKEMON_TYPE_FILTER = 'REMOVE_POKEMON_TYPE_FILTER';
export const ADD_SEARCH_TEXT_FILTER = 'ADD_SEARCH_TEXT_FILTER';
export const SEARCH = 'SEARCH';
export const SEARCHING_POKEMONS = 'SEARCHING_POKEMONS';
export const POKEMONS_FOUND = 'POKEMONS_FOUND';

export const startPokemonsSearch = () => ({
	type: SEARCHING_POKEMONS,
	payload: true
});

export const receivePokemons = ({ searchingPokemons, pokemons }) => ({
	type: POKEMONS_FOUND,
	payload: { searchingPokemons, pokemons }
});
