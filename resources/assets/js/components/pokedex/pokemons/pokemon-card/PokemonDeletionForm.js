import React, { Component } from 'react';
import { Button, TextField } from 'react-md';
import styles from './card-header.style';
import { WHITE } from '@pokedex/assets/js/utils/colors';

export class PokemonDeletionForm extends Component {
	render() {
		return (
			<form>
				<TextField
					name="name"
					id="name"
					placeholder="Example: Pikachu"
				/>

				<Button
					flat
					style={{ ...styles.deleteButton, color: WHITE }}
					className="center-block"
				>
					Delete
				</Button>
			</form>
		);
	}
}
