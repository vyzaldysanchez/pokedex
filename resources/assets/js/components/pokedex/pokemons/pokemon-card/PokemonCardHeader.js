import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardTitle, Media, MediaOverlay } from 'react-md';
import { POKEMON_HEADER_HEIGHT } from '@pokedex/assets/js/utils/styles';

const getPrivacyIcon = isPublic => (isPublic ? 'lock_open' : 'lock_outline');
const getStatusIcon = captured => (captured ? 'favorite' : 'favorite_border');

export const PokemonCardHeader = ({
	id,
	image,
	name = 'Pokemon Name',
	captured,
	isPublic
}) => (
	<Media style={{ ...POKEMON_HEADER_HEIGHT, width: '100%' }}>
		<img src={image.src} alt={name} style={{ objectFit: 'contain' }} />

		<MediaOverlay>
			<CardTitle title={name}>
				<div className="md-cell--right">
					<Button icon disabled>
						{getStatusIcon(captured)}
					</Button>

					<Button icon disabled>
						{getPrivacyIcon(isPublic)}
					</Button>

					<Link to={`/pokemons/${id}/edit`}>
						<Button icon className="md-paper--1">
							edit
						</Button>
					</Link>
				</div>
			</CardTitle>
		</MediaOverlay>
	</Media>
);
