import React from 'react';
import { CardText, FontIcon } from 'react-md';
import { LabelChip } from '@pokedex/assets/js/components/shared/LabelChip';

const getStatusIcon = captured => (
	<FontIcon>{captured ? 'copyright' : 'block'}</FontIcon>
);
const getPrivacyIcon = isPublic => (
	<FontIcon>{isPublic ? 'visibility' : 'visibility_off'}</FontIcon>
);

export const PokemonCardBody = ({
	types = [],
	age,
	pounds,
	description,
	captured,
	isPublic
}) => (
	<CardText>
		<div>
			{getStatusIcon(captured)}
			{getPrivacyIcon(isPublic)}
		</div>
		<div>
			{types.map((type, id) => (
				<LabelChip
					backgroundColor={type.color}
					label={type.name}
					key={id}
				/>
			))}
		</div>

		<div>
			<b>Age:</b> {age}
			<br />
			<b>Weight:</b> {pounds}
		</div>

		<div style={{ marginTop: 10 }}>
			<p>{description}</p>
		</div>
	</CardText>
);
