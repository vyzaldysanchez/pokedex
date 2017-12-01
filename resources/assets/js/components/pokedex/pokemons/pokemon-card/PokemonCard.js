import React, { Component } from 'react';
import { Card, Cell } from 'react-md';
import { SIX_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { PokemonCardHeader } from './PokemonCardHeader';
import { PokemonCardBody } from './PokemonCardBody';

export const PokemonCard = ({ pokemon = {}, captured, isPublic }) => (
	<Cell size={SIX_COLUMNS} style={{ display: 'inline-block' }}>
		<Card>
			<PokemonCardHeader
				name={pokemon.name}
				image={{ src: `/api/pokemons/${pokemon.id}/image` }}
				captured={pokemon.captured}
				isPublic={pokemon.public}
			/>

			<PokemonCardBody
				age={pokemon.age}
				pounds={pokemon.pounds}
				description={pokemon.description}
				types={pokemon.types}
			/>
		</Card>
	</Cell>
);
