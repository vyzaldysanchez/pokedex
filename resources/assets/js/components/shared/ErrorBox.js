import React from 'react';

export const ErrorBox = props => (
	<div className="md-text-field-message-container md-full-width md-text--error">
		<div
			aria-hidden={!props.display}
			className="md-text-field-message md-text-field-message--active"
			style={{ visibility: props.display ? 'visible' : 'hidden' }}
		>
			{props.message}
		</div>
	</div>
);
