import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardTitle, Media, MediaOverlay } from 'react-md';
import styles from './card-header.style';

export const PokemonCardHeader = ({ id, image, name, onPokemonDeletion }) => (
	<Media style={styles.header}>
		<img src={image.src} alt={name} style={{ objectFit: 'contain' }} />

		<MediaOverlay>
			<CardTitle title={name}>
				<div className="md-cell--right">
					<Link to={`/pokemons/${id}/edit`}>
						<Button
							icon
							primary
							className="md-paper--1"
							style={styles.editButton}
						>
							edit
						</Button>
					</Link>

					<Button
						icon
						className="md-paper--1"
						style={styles.deleteButton}
						onClick={onPokemonDeletion}
					>
						delete
					</Button>
				</div>
			</CardTitle>
		</MediaOverlay>
	</Media>
);
