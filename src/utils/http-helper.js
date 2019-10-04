import React from 'react';

export const getErrorsFrom = ({ errors, message }) => {
	const errorKeys = Object.keys(errors || {});

	if (errorKeys.length) {
		return errorKeys.map(errorKey =>
			errors[errorKey].map(message => (
				<span style={{ display: 'block' }}>{message}</span>
			))
		);
	}

	return message;
};
