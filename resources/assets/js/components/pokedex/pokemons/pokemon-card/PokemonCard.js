import React, { Component } from 'react';
import { Card, Cell, DialogContainer } from 'react-md';
import {
	FOUR_COLUMNS,
	SIX_COLUMNS,
	TWELVE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { PokemonCardHeader } from './PokemonCardHeader';
import { PokemonCardBody } from './PokemonCardBody';
import { PokemonDeletionForm } from './PokemonDeletionForm';

export class PokemonCard extends Component {
	constructor(props) {
		super(props);

		this.state = { deletionConfirmationDisplayed: false };

		this.hideDeletionConfirmation = this.hideDeletionConfirmation.bind(
			this
		);
		this.showDeletionConfirmation = this.showDeletionConfirmation.bind(
			this
		);
	}

	showDeletionConfirmation() {
		this.setState({ deletionConfirmationDisplayed: true });
	}

	hideDeletionConfirmation() {
		this.setState({ deletionConfirmationDisplayed: false });
	}

	render() {
		const { pokemon = {}, captured, isPublic } = this.props;
		const { deletionConfirmationDisplayed } = this.state;

		return (
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
						onPokemonDeletion={this.showDeletionConfirmation}
					/>

					<PokemonCardBody
						age={pokemon.age}
						pounds={pokemon.pounds}
						description={pokemon.description}
						types={pokemon.types}
					/>

					<DialogContainer
						id="pokemon-deletion-confirmation"
						title="Write the name of the pokemon to delete it!!"
						visible={deletionConfirmationDisplayed}
						onHide={this.hideDeletionConfirmation}
						focusOnMount={false}
					>
						<PokemonDeletionForm />
					</DialogContainer>
				</Card>
			</Cell>
		);
	}
}
