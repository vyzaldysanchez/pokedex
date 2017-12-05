import React, { Component } from 'react';
import { Card, Cell } from 'react-md';
import {
	FOUR_COLUMNS,
	SIX_COLUMNS,
	TWELVE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { PokemonCardHeader } from './PokemonCardHeader';
import { PokemonCardBody } from './PokemonCardBody';

export const PokemonCard = ({ pokemon = {}, captured, isPublic }) => (
	<Cell
		desktopSize={FOUR_COLUMNS}
		phoneSize={TWELVE_COLUMNS}
		tabletSize={SIX_COLUMNS}
		style={{ display: 'inline-flex', flexFlow: 'column' }}
	>
		<Card>
			<PokemonCardHeader
				id={pokemon.id}
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
				location={pokemon.location}
			/>
		</Card>
	</Cell>
);
