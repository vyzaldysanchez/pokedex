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
	TWELVE_COLUMNS,
	FIVE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';

const renderPokemonTypeSelection = (type, index) => (
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
	/>
);

const AddPokemonForm = props => (
	<form className="add-pokemon-form" onSubmit={props.onSubmit}>
		<input type="hidden" name="_token" value={props.csrfToken} />

		<TextField name="name" id="pokemon-name" label="The pokemon name here" required />

		<Cell size={TWELVE_COLUMNS}>
			<label style={{ display: 'block' }}>
				Select the types of this pokemon:
			</label>
			{props.pokemonTypes.map(renderPokemonTypeSelection)}
		</Cell>

		<Cell size={SIX_COLUMNS}>
			<TextField
				name="age"
                id="pokemon-age"
				label="The pokemon age in years"
				type="number"
				min={props.numberMin}
				required
			/>
		</Cell>

		<Cell size={SIX_COLUMNS}>
			<TextField
				name="pounds"
                id="pokemon-pounds"
				label="The pokemon pounds"
				type="number"
				min={props.numberMin}
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
		/>

		<SelectionControl
			id="pokemon-is-public-checkbox"
			name="public"
			type="checkbox"
			label="Public?"
			checkedCheckboxIcon={<FontIcon>check</FontIcon>}
			inline={true}
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
				onLoad={({ name }) => this.setState({ fileName: name })}
			/>

			<TextField
				id="pokemon-image-name-field"
				placeholder="No image selected"
				value={props.fileName}
				className="file-inputs__upload-form__file-field"
				readOnly
				fullWidth={false}
			/>
		</Cell>

		<TextField label="Provide a description" id="pokemon-description" name="description" rows={FIVE_COLUMNS} />

		<Button flat secondary swapTheming>
			Add To Pokedex
		</Button>
	</form>
);

export { AddPokemonForm };
