import React from 'react';
import { CardText } from 'react-md';

export const PokemonCardBody = ({ types = [], age, pounds, description }) => (
	<CardText>
		<div>
			{types.map((type, id) => (
				<label
					key={id}
					className="label"
					style={{ backgroundColor: type.color }}
				>
					{type.name}
				</label>
			))}
		</div>

		<div>
			{age}, {pounds}
		</div>

		<p>{description}</p>
	</CardText>
);
