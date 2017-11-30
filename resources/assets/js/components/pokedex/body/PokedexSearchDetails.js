import React from 'react';

export const PokedexSearchDetails = props => (
	<div>
		<h3>
			Searching:&nbsp;
			<i style={{ display: 'inline-flex' }}>
				<small>{props.searching}</small>
			</i>
		</h3>
	</div>
);
