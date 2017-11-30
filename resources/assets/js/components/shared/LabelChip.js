import React from 'react';

export const LabelChip = props => (
	<label
		className="label"
		style={{
			backgroundColor: props.backgroundColor,
			fontWeight: 900,
			fontSize: 14,
			...props.style
		}}
		onClick={props.onClick}
	>
		<span className="text-capitalize">{props.label}</span>
	</label>
);
