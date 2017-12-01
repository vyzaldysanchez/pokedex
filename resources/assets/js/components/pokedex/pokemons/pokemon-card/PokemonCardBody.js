import React from 'react';
import { CardText, Divider } from 'react-md';
import { LabelChip } from '@pokedex/assets/js/components/shared/LabelChip';

export const PokemonCardBody = ({ types = [], age, pounds, description }) => (
	<CardText>
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
