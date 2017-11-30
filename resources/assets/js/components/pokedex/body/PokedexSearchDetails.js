import React from 'react';

const inlineFlexWrap = { display: 'inline-flex', flexFlow: 'wrap' };

export const PokedexSearchDetails = props => (
	<div>
		<h3 style={{ wordWrap: 'break-word' }}>
			Searching:&nbsp;
			<i style={{ whiteSpace: 'normal' }}>
				<small>{props.searching}</small>
			</i>
		</h3>

		<div style={inlineFlexWrap}>{props.types}</div>
	</div>
);
