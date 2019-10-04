import React from 'react';

export const LabelChip = props => (
	<label
		className="label md-paper--2"
		style={{
			display: 'inline-block',
			backgroundColor: props.backgroundColor,
			fontWeight: 900,
			fontSize: 14,
			...props.style,
		}}
		onClick={props.onClick}
	>
		<span
			className="text-capitalize"
			style={{
				textShadow: '1px 1px 2px black',
			}}
		>
			{props.label}
		</span>
	</label>
);
