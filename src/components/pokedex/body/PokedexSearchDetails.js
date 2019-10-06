import React from 'react';
import PropTypes from 'prop-types';

const inlineFlexWrap = { display: 'inline-flex', flexFlow: 'wrap' };
const fullBlock = { display: 'block', width: '100%' };

export const PokedexSearchDetails = ({ types, searching }) => {
	let selections = null;

	if (types.length) {
		selections = (
			<div style={{ ...inlineFlexWrap, width: '100%' }}>
				<div style={fullBlock}>
					<p>
						<i>Click on selection to remove.</i>
					</p>
				</div>
				<div style={fullBlock}>{types}</div>
			</div>
		);
	}

	return (
		<div>
			<span>
				Remember to click on <b>Search</b> to apply your filters...
			</span>
			<h3 style={{ wordWrap: 'break-word' }}>
				Searching:&nbsp;
				<i style={{ whiteSpace: 'normal' }}>
					<small>{searching}</small>
				</i>
			</h3>

			{selections}
		</div>
	);
};

PokedexSearchDetails.propTypes = {
	types: PropTypes.array,
};

PokedexSearchDetails.defaultProps = {
	types: [],
};
