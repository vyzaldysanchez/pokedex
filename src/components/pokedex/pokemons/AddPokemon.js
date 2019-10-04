import React from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import * as axios from 'axios';
import pokemonTypes from '../../../services/pokemon-types.service';
import pokemons from '../../../services/pokemons.service';
import {
	THREE_COLUMNS,
	SIX_COLUMNS,
} from '../../../utils/ui-columns';
import { AddPokemonForm } from './AddPokemonForm';
import {
	LOAD_POKEMON_TYPES,
} from '../../pokedex/actions';
import { withPokemonTypesAndNotification } from '../../pokedex/state-props-mappers';
import { styles } from '../../pokedex/header/styles-vars';
import { BaseFormContainer } from '../../shared/BaseFormContainer';
import { validator } from './AddPokemonFormValidator';
import domUtils from '../../../utils/dom.utils';
import { sendNotificationMessage } from '../../../services/notifications.service';
import { getErrorsFrom } from '../../../utils/http-helper';

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
						isPublic: pokemon.public,
						location: {
							lat: Number.parseFloat(pokemon.location.latitude),
							lng: Number.parseFloat(pokemon.location.longitude)
						}
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

	get submitSuccessMessage() {
		return this.props.edit
			? 'Your pokemon has been updated correctly'
			: 'Your pokemon has been created correctly';
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
		const { pokemon } = this.state;

		this.validator.validate(this.state.pokemon, ignoreFields);

		this.setState({
			pokemon: Object.assign(
				{},
				pokemon,
				this.generatePokemonFields({
					name: pokemon.name.value,
					typesIds: pokemon.typesIds.value,
					age: Number.parseFloat(pokemon.age.value),
					pounds: Number.parseFloat(pokemon.pounds.value),
					description: pokemon.description.value,
					image: pokemon.image.value,
					captured: pokemon.captured.value,
					isPublic: pokemon.public.value,
					location: pokemon.location.value
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
		formData.append('location[lat]', pokemon.location.value.lat);
		formData.append('location[lng]', pokemon.location.value.lng);

		const formElements = document.querySelectorAll(
			'.md-cell input, .md-cell button, .md-cell textarea'
		);

		domUtils.disableElements(formElements);

		axios
			.post(this.submitUrl, formData)
			.then(res => {
				sendNotificationMessage(
					this.props.dispatch,
					this.submitSuccessMessage
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
		const { name, typesIds = [], age, pounds, location } = fields;
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
			),
			location: this.generateField(
				{ value: location || { lat: null, lng: null } },
				'location',
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
						useCurrentLocation={!this.props.edit}
					/>
				</Cell>
			</Grid>
		);
	}
}

export default connect(withPokemonTypesAndNotification.mapStateToProps)(
	AddPokemon
);
