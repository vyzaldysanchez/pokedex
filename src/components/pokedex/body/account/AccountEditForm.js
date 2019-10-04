import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from 'react-md';
import commonFormatter from '../../../../utils/common-formatter';

const AccountEditForm = props => (
	<form action="/users/edit/" method="post" onSubmit={props.onSubmit}>
		<input type="hidden" name="_method" value="put" />
		<input type="hidden" name="_token" value={props.csrfToken} />

		<TextField
			id="userFullName"
			name="full_name"
			label="Your name here"
			required
			value={props.fullName.value}
			onChange={props.fullName.onChange}
			error={props.fullName.error}
			errorText={props.fullName.errorText}
		/>

		<TextField
			type="tel"
			id="userTelephone"
			name="telephone"
			label="Your telephone here..."
			required
			value={commonFormatter.formatTelephone(props.telephone.value)}
			onChange={props.telephone.onChange}
			error={props.telephone.error}
			errorText={props.telephone.errorText}
		/>

		<TextField
			id="userCity"
			name="city"
			label="Your city here..."
			required
			value={props.city.value}
			onChange={props.city.onChange}
			error={props.city.error}
			errorText={props.city.errorText}
		/>

		<Button raised primary type="submit">
			Update your informations!
		</Button>
	</form>
);

AccountEditForm.propTypes = {
	csrfToken: PropTypes.string.isRequired
};

export default AccountEditForm;
