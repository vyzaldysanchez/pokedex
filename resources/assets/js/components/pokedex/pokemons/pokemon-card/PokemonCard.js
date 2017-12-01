import React, { Component } from 'react';
import { Card, Cell } from 'react-md';
import { SIX_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';
import { PokemonCardHeader } from './PokemonCardHeader';
import { PokemonCardBody } from './PokemonCardBody';

export const PokemonCard = ({ image = {}, captured, isPublic }) => (
	<Cell size={SIX_COLUMNS}>
		<Card>
			<PokemonCardHeader image={image} />

			<PokemonCardBody />
		</Card>
	</Cell>
);
