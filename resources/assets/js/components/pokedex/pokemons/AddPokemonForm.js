import React from 'react';
import {
	Button,
	Cell,
	FileUpload,
	FontIcon,
	TextField,
	SelectField,
	SelectionControl
} from 'react-md';
import {
	SIX_COLUMNS,
	FIVE_COLUMNS,
	TWELVE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import { RED } from '@pokedex/assets/js/utils/colors';

const renderPokemonTypeSelection = (onChange, type, index) => (
	<SelectionControl
		id={`pokemon-types-checkbox-${index}`}
		key={index}
		name="pokemon_types_ids"
		type="checkbox"
		label={type.name}
		checkedCheckboxIcon={
			<FontIcon style={{ color: type.color }}>check</FontIcon>
		}
		inline={true}
		onChange={() => onChange(type.id)}
	/>
);

const POKEMON_AGE_MIN = 1;
const POKEMON_POUNDS_MIN = 0.01;

const AddPokemonForm = props => {
	const {
		csrfToken,
		pokemonTypes,
		pokemon,
		onSubmit,
		onTypeSelection,
		onImageSelected
	} = props;

	return (
		<form className="add-pokemon-form" onSubmit={onSubmit}>
			<input type="hidden" name="_token" value={csrfToken} />

			<TextField
				name="name"
				id="pokemon-name"
				label="The pokemon name here"
				value={pokemon.name}
				required
			/>

			<Cell size={TWELVE_COLUMNS}>
				<label style={{ display: 'block' }}>
					Select the types of this pokemon:
				</label>
				{pokemonTypes.map(
					renderPokemonTypeSelection.bind(null, onTypeSelection)
				)}
			</Cell>

			<Cell size={SIX_COLUMNS}>
				<TextField
					name="age"
					id="pokemon-age"
					label="The pokemon age in years"
					type="number"
					min={POKEMON_AGE_MIN}
					value={pokemon.age}
					required
				/>
			</Cell>

			<Cell size={SIX_COLUMNS}>
				<TextField
					name="pounds"
					id="pokemon-pounds"
					label="The pokemon pounds"
					type="number"
					min={POKEMON_POUNDS_MIN}
					value={pokemon.pounds}
					required
				/>
			</Cell>

			<SelectionControl
				id="pokemon-captured-checkbox"
				name="captured"
				type="checkbox"
				label="Captured?"
				checkedCheckboxIcon={<FontIcon>check</FontIcon>}
				inline={true}
				onChange={null}
				checked={pokemon.captured}
			/>

			<SelectionControl
				id="pokemon-is-public-checkbox"
				name="public"
				type="checkbox"
				label="Public?"
				checkedCheckboxIcon={<FontIcon>check</FontIcon>}
				inline={true}
				onChange={null}
				checked={pokemon.public}
			/>

			<Cell size={TWELVE_COLUMNS}>
				<FileUpload
					id="pokemon-image"
					label="Choose an image"
					required
					accept="image/*"
					name="image"
					className="file-inputs__upload-form__file-upload"
					primary
					iconBefore
					onLoad={onImageSelected}
				/>

				<TextField
					id="pokemon-image-name-field"
					placeholder="No image selected"
					className="file-inputs__upload-form__file-field"
					readOnly
					fullWidth={false}
					value={pokemon.imageName}
				/>
			</Cell>

			<TextField
				label="Provide a description"
				id="pokemon-description"
				name="description"
				rows={FIVE_COLUMNS}
				value={pokemon.description}
			/>

			<Cell size={TWELVE_COLUMNS}>
				<Button
					flat
					secondary
					swapTheming
					style={{ backgroundColor: RED }}
					iconBefore
					iconEl={<FontIcon>add</FontIcon>}
				>
					Add To Pokedex
				</Button>
			</Cell>
		</form>
	);
};

export { AddPokemonForm };
