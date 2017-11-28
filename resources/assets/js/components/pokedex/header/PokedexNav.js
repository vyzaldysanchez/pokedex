import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, FontIcon } from 'react-md';
import { RED } from '@pokedex/assets/js/utils/colors';

const PokedexNav = ({ className, onDisplayAccountBox, onAddPokemon }) => (
	<div>
		<Button
			icon
			className={className}
			style={{ marginRight: 10, backgroundColor: RED }}
			tooltipLabel="Add Pokemon"
			tooltipPosition="left"
			tooltipStyle={{ backgroundColor: RED, fontWeight: 900 }}
			onClick={onAddPokemon}
		>
			add
		</Button>
		<Button icon className={className} onClick={onDisplayAccountBox}>
			face
		</Button>
	</div>
);

PokedexNav.propTypes = {
	className: PropTypes.string
};

export default PokedexNav;
