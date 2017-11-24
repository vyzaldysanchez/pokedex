import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const PokedexNav = ({ className, onClick }) => (
	<Button icon className={className} onClick={onClick}>
		face
	</Button>
);

PokedexNav.propTypes = {
	className: PropTypes.string
};

export default PokedexNav;
