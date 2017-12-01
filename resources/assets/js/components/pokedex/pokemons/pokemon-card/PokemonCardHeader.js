import React from 'react';
import { Button, CardTitle, Media, MediaOverlay } from 'react-md';

const getPrivacyIcon = isPublic => (isPublic ? 'lock_open' : 'lock_outline');
const getStatusIcon = captured => (captured ? 'favorite' : 'favorite_border');

const imgHeight = 402;

export const PokemonCardHeader = ({
	image,
	name = 'Pokemon Name',
	captured,
	isPublic
}) => (
	<Media style={{ height: imgHeight, width: imgHeight }}>
		<img src={image.src} alt={name} />

		<MediaOverlay>
			<CardTitle title={name}>
				<div className="md-cell--right">
					<Button icon disabled>
						{getStatusIcon(captured)}
					</Button>

					<Button icon disabled>
						{getPrivacyIcon(isPublic)}
					</Button>

					<Button icon className="md-paper--1">
						edit
					</Button>
				</div>
			</CardTitle>
		</MediaOverlay>
	</Media>
);
