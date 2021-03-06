import React from 'react';
import {
	Button,
	Cell,
	Divider,
	FileUpload,
	FontIcon,
	TextField,
	SelectionControl,
} from 'react-md';
import {
	SIX_COLUMNS,
	FIVE_COLUMNS,
	TWELVE_COLUMNS,
} from '../../../utils/ui-columns';
import { RED } from '../../../utils/colors';
import { ErrorBox } from '../../shared/ErrorBox';
import { Map } from '../../shared/maps/Map';

const renderPokemonTypeSelection = (onChange, selectedTypes, type, index) => (
	<SelectionControl
		id={`pokemon-types-checkbox-${index}`}
		key={index}
		name="pokemon_types_ids"
		type="checkbox"
		label={type.name}
		checked={selectedTypes.indexOf(type.id) > -1}
		checkedCheckboxIcon={
			<FontIcon style={{ color: type.color }}>check</FontIcon>
		}
		inline={true}
		onChange={() => onChange(type.id)}
	/>
);

export const POKEMON_AGE_MIN = 1;
export const POKEMON_POUNDS_MIN = 0.0;

const AddPokemonForm = props => {
	const {
		pokemonTypes,
		pokemon,
		onSubmit,
		onTypeSelection,
		buttonText,
		useCurrentLocation
	} = props;

	return (
		<form
			className="add-pokemon-form"
			method="post"
			encType="multipart/form-data"
			onSubmit={onSubmit}
		>
			<Cell size={TWELVE_COLUMNS}>
				<TextField
					name="name"
					id="pokemon-name"
					label="The pokemon name here"
					value={pokemon.name.value}
					required
					error={pokemon.name.error}
					errorText={pokemon.name.errorText}
					onChange={pokemon.name.onChange}
				/>
			</Cell>

			<Cell size={TWELVE_COLUMNS}>
				<label style={{ display: 'block' }}>
					Select the types of this pokemon:
				</label>

				{pokemonTypes.map(
					renderPokemonTypeSelection.bind(
						null,
						onTypeSelection,
						pokemon.typesIds.value
					)
				)}

				<ErrorBox
					display={pokemon.typesIds.error}
					message={pokemon.typesIds.errorText}
				/>
			</Cell>

			<Cell size={SIX_COLUMNS}>
				<TextField
					name="age"
					id="pokemon-age"
					label="The pokemon age in years"
					type="number"
					min={POKEMON_AGE_MIN}
					required
					value={pokemon.age.value}
					error={pokemon.age.error}
					errorText={pokemon.age.errorText}
					onChange={pokemon.age.onChange}
				/>
			</Cell>

			<Cell size={SIX_COLUMNS}>
				<TextField
					name="pounds"
					id="pokemon-pounds"
					label="The pokemon pounds"
					type="number"
					min={POKEMON_POUNDS_MIN}
					required
					value={pokemon.pounds.value}
					error={pokemon.pounds.error}
					errorText={pokemon.pounds.errorText}
					onChange={pokemon.pounds.onChange}
				/>
			</Cell>

			<Cell size={TWELVE_COLUMNS}>
				<SelectionControl
					id="pokemon-captured-checkbox"
					name="captured"
					type="checkbox"
					label="Captured?"
					checkedCheckboxIcon={<FontIcon>check</FontIcon>}
					inline={true}
					onChange={null}
					checked={pokemon.captured.value}
					onChange={pokemon.captured.onChange}
				/>

				<SelectionControl
					id="pokemon-is-public-checkbox"
					name="public"
					type="checkbox"
					label="Public?"
					checkedCheckboxIcon={<FontIcon>check</FontIcon>}
					inline={true}
					onChange={null}
					checked={pokemon.public.value}
					onChange={pokemon.public.onChange}
				/>

				<Divider />
			</Cell>

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
					onLoad={pokemon.image.onChange}
				/>

				<TextField
					id="pokemon-image-name-field"
					placeholder="No image selected"
					className="file-inputs__upload-form__file-field"
					readOnly
					fullWidth={false}
					value={pokemon.image.value}
				/>

				<ErrorBox
					display={pokemon.image.error}
					message={pokemon.image.errorText}
				/>
			</Cell>

			<TextField
				label="Provide a description"
				id="pokemon-description"
				name="description"
				rows={FIVE_COLUMNS}
				required
				value={pokemon.description.value}
				error={pokemon.description.error}
				errorText={pokemon.description.errorText}
				onChange={pokemon.description.onChange}
			/>

			<Cell size={TWELVE_COLUMNS}>
				<label>Where did you find the pokemon...?</label>

				<Map
					lat={pokemon.location.value.lat}
					lng={pokemon.location.value.lng}
					currentLocationAsDefault={useCurrentLocation}
					onPositionSelected={pokemon.location.onChange}
				/>

				<ErrorBox
					display={pokemon.location.error}
					message={pokemon.location.errorText}
				/>
			</Cell>

			<Cell size={TWELVE_COLUMNS}>
				<Button
					raised
					secondary
					style={{ backgroundColor: RED }}
					iconBefore
					iconEl={<FontIcon>add</FontIcon>}
					type="submit"
				>
					{buttonText}
				</Button>
			</Cell>
		</form>
	);
};

export { AddPokemonForm };
