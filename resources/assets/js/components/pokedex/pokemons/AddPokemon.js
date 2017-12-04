import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import pokemonTypes from '@pokedex/assets/js/services/pokemon-types.service';
import pokemons from '@pokedex/assets/js/services/pokemons.service';
import {
	THREE_COLUMNS,
	SIX_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { AddPokemonForm } from './AddPokemonForm';
import {
	LOAD_POKEMON_TYPES,
	ADD_NOTIFICATION
} from '@pokedex/assets/js/components/pokedex/actions';
import { withPokemonTypesAndNotification } from '@pokedex/assets/js/components/pokedex/state-props-mappers';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';
import { BaseFormContainer } from '@pokedex/assets/js/components/shared/BaseFormContainer';
import { validator } from './AddPokemonFormValidator';
import domUtils from '@pokedex/assets/js/utils/dom.utils';
import { sendNotificationMessage } from '@pokedex/assets/js/services/notifications.service';
import { getErrorsFrom } from '@pokedex/assets/js/utils/http-helper';

class AddPokemon extends BaseFormContainer {
	constructor(props) {
		super(props, validator);

		this.buttonText = this.props.edit ? 'Update Pokedex' : 'Add to Pokedex';

		this.state = {
			pokemon: this.generatePokemonFields({}),
			pokemonImage: ''
		};
		this.handleTypeSelection = this.handleTypeSelection.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.updatePokemon = this.updatePokemon.bind(this);
		this.loadImage = this.loadImage.bind(this);
	}

	componentDidMount() {
		if (!this.props.pokemonTypes.length) {
			pokemonTypes.getAll().then(types =>
				this.props.dispatch({
					type: LOAD_POKEMON_TYPES,
					payload: types
				})
			);
		}

		if (this.props.edit) {
			this.loadPokemonToEdit();
		}
	}

	loadPokemonToEdit() {
		pokemons.find(this.props.pokemonId).then(pokemon => {
			this.setState({
				pokemon: Object.assign(
					{},
					this.state.pokemon,
					this.generatePokemonFields({
						name: pokemon.name,
						typesIds: pokemon.types.map(type => type.id),
						age: Number.parseFloat(pokemon.age),
						pounds: Number.parseFloat(pokemon.pounds),
						description: pokemon.description,
						captured: pokemon.captured,
						isPublic: pokemon.public
					})
				)
			});
		});
	}

	get submitUrl() {
		return this.props.edit
			? `/api/pokemons/${this.props.pokemonId}`
			: '/api/pokemons';
	}

	get title() {
		return this.props.edit ? 'Edit your Pokemon' : 'Add a Pokemon';
	}

	handleTypeSelection(id) {
		let typesIds = this.state.pokemon.typesIds.value.slice();
		const typeSelectedIndex = typesIds.indexOf(id);

		if (typeSelectedIndex > -1) {
			typesIds = pokemonTypes.removeTypeFromCollection(
				typeSelectedIndex,
				typesIds
			);
		} else {
			typesIds.push(id);
		}

		this.setState({
			pokemon: {
				...this.state.pokemon,
				typesIds: this.generateField(
					{ value: typesIds },
					'typesIds',
					this.handleInput
				)
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.validateForm();

		if (!this.validator.hasErrors()) {
			this.submitForm();
		}
	}

	validateForm() {
		const ignoreFields = this.props.edit ? ['image'] : [];
		this.validator.validate(this.state.pokemon, ignoreFields);

		this.setState({
			pokemon: Object.assign(
				{},
				this.state.pokemon,
				this.generatePokemonFields({
					name: this.state.pokemon.name.value,
					typesIds: this.state.pokemon.typesIds.value,
					age: Number.parseFloat(this.state.pokemon.age.value),
					pounds: Number.parseFloat(this.state.pokemon.pounds.value),
					description: this.state.pokemon.description.value,
					image: this.state.pokemon.image.value,
					captured: this.state.pokemon.captured.value,
					isPublic: this.state.pokemon.public.value
				})
			)
		});
	}

	submitForm() {
		const formData = new FormData();
		const pokemon = this.state.pokemon;

		if (this.props.edit) {
			formData.append('_method', 'PUT');
		}

		formData.append('name', pokemon.name.value);
		formData.append('age', Number.parseFloat(pokemon.age.value));
		formData.append('pounds', Number.parseFloat(pokemon.pounds.value));
		formData.append('captured', pokemon.captured.value);
		formData.append('public', pokemon.public.value);
		formData.append('description', pokemon.description.value);
		formData.append('image', this.state.pokemonImage);
		pokemon.typesIds.value.forEach(id =>
			formData.append('pokemon_types_ids[]', id)
		);

		const formElements = document.querySelectorAll(
			'.md-cell input, .md-cell button, .md-cell textarea'
		);

		domUtils.disableElements(formElements);

		axios
			.post(this.submitUrl, formData)
			.then(res => {
				sendNotificationMessage(
					this.props.dispatch,
					'Your pokemon has been created correctly'
				);
				this.resetForm();
				domUtils.enableElements(formElements);
			})
			.catch(({ response }) => {
				sendNotificationMessage(
					this.props.dispatch,
					getErrorsFrom(response.data)
				);
				domUtils.enableElements(formElements);
			});
	}

	generatePokemonFields(fields) {
		const { name, typesIds = [], age, pounds } = fields;
		const { captured, isPublic, description, image } = fields;

		return {
			name: this.generateField(
				{ value: name || '' },
				'name',
				this.handleInput
			),
			typesIds: this.generateField(
				{ value: typesIds },
				'typesIds',
				this.handleInput
			),
			age: this.generateField(
				{ value: age || 0 },
				'age',
				this.handleInput
			),
			pounds: this.generateField(
				{ value: pounds || 0 },
				'pounds',
				this.handleInput
			),
			image: this.generateField(
				{ value: image || '' },
				'image',
				this.loadImage
			),
			description: this.generateField(
				{ value: description || '' },
				'description',
				this.handleInput
			),
			public: this.generateField(
				{ value: isPublic || false },
				'public',
				this.handleInput
			),
			captured: this.generateField(
				{ value: captured || false },
				'captured',
				this.handleInput
			)
		};
	}

	loadImage(name, file) {
		this.setState({ pokemonImage: file });
		this.handleInput(name, file.name);
	}

	handleInput(fieldName, value) {
		this.validator.fields[fieldName].validate(value);
		this.updatePokemon(fieldName, value, this.handleInput);
	}

	updatePokemon(fieldName, value, callback) {
		const newState = {
			pokemon: Object.assign({}, this.state.pokemon, {
				[fieldName]: this.generateField({ value }, fieldName, callback)
			})
		};

		this.setState(newState);
	}

	resetForm() {
		this.setState({ pokemon: this.generatePokemonFields({}) });
	}

	render() {
		const { height } = styles;

		return (
			<Grid className="add-pokemon-form" style={{ marginTop: height }}>
				<Cell size={SIX_COLUMNS} desktopOffset={THREE_COLUMNS}>
					<h1>{this.title}</h1>

					<AddPokemonForm
						pokemonTypes={this.props.pokemonTypes}
						pokemon={this.state.pokemon}
						onTypeSelection={this.handleTypeSelection}
						onImageSelected={this.updateImageName}
						onSubmit={this.onSubmit}
						buttonText={this.buttonText}
					/>
				</Cell>
			</Grid>
		);
	}
}

export default connect(withPokemonTypesAndNotification.mapStateToProps)(
	AddPokemon
);
