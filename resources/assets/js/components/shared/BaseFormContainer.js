import React, { Component } from 'react';

export class BaseFormContainer extends Component {
	constructor(props, validator) {
		super(props);

		this.validator = validator;
	}

	generateField(obj, fieldName, onChange) {
		return Object.assign({}, obj, {
			error: this.validator.fields[fieldName].displayError,
			errorText: this.validator.fields[fieldName].error,
			onChange: onChange.bind(this, fieldName)
		});
	}
}
