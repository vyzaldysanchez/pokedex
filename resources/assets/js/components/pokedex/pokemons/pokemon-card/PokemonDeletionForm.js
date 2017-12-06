import React, { Component } from 'react';
import { Button, TextField } from 'react-md';
import styles from './card-header.style';
import { WHITE } from '@pokedex/assets/js/utils/colors';
import axios from 'axios';
import { sendNotificationMessage } from '@pokedex/assets/js/services/notifications.service';
import { getErrorsFrom } from '@pokedex/assets/js/utils/http-helper';
import { connect } from 'react-redux';
import { withNotifications } from '@pokedex/assets/js/components/pokedex/state-props-mappers';

class PokemonDeletionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			error: false,
			errorText: 'Must type the name of the pokemon to delete it!!'
		};

		this.setName = this.setName.bind(this);
		this.deletePokemon = this.deletePokemon.bind(this);
	}

	setName(name) {
		this.setState({ name });
	}

	deletePokemon() {
		const { pokemonId, onPokemonDeleted } = this.props;
		const { name } = this.state;

		if (name && this.pokemonNameIsCorrect(name)) {
			this.setState({ error: false });

			axios
				.delete(`/api/pokemons/${pokemonId}?name=${name}`)
				.then(onPokemonDeleted)
				.catch(err =>
					sendNotificationMessage(
						this.props.dispatch,
						getErrorsFrom(err)
					)
				);
		} else {
			this.setState({ error: true });
		}
	}

	pokemonNameIsCorrect(name) {
		const { pokemonName } = this.props;
		return pokemonName === name;
	}

	render() {
		const { name, error, errorText } = this.state;

		return (
			<form>
				<TextField
					name="name"
					id="name"
					placeholder="Example: Pikachu"
					value={name}
					onChange={this.setName}
					error={error}
					errorText={errorText}
				/>

				<Button
					flat
					style={{ ...styles.deleteButton, color: WHITE }}
					className="center-block"
					onClick={this.deletePokemon}
				>
					Delete
				</Button>
			</form>
		);
	}
}

export default connect(withNotifications.mapStateToProps)(PokemonDeletionForm);
