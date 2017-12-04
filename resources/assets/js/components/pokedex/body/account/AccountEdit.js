import React from 'react';
import { connect } from 'react-redux';
import { Cell, Grid } from 'react-md';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';
import {
	THREE_COLUMNS,
	SIX_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';
import AccountEditForm from './AccountEditForm';
import { validator } from '@pokedex/assets/js/components/auth/registration/RegistrationFormValidator';
import { BaseFormContainer } from '@pokedex/assets/js/components/shared/BaseFormContainer';

class AccountEdit extends BaseFormContainer {
	constructor(props) {
		super(props, validator);

		this.validator = validator;

		const { id, fullName, city, email, telephone } = this.props.user;

		this.state = {
			csrfToken: '',
			user: {
				id: id,
				fullName: this.generateField(
					{ value: fullName || '' },
					'fullName',
					this.handleUserInput
				),
				city: this.generateField(
					{ value: city || '' },
					'city',
					this.handleUserInput
				),
				email: this.generateField(
					{ value: email || '' },
					'email',
					this.handleUserInput
				),
				telephone: this.generateField(
					{ value: telephone || '' },
					'telephone',
					this.handleUserInput
				)
			}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserInput(fieldName, value) {
		this.validator.fields[fieldName].validate(value);

		this.setState({
			user: Object.assign({}, this.state.user, {
				[fieldName]: this.generateField(
					{ value },
					fieldName,
					this.handleUserInput
				)
			})
		});
	}

	componentDidMount() {
		this.setState({
			csrfToken: document
				.querySelector('meta[name="csrf-token"]')
				.getAttribute('value')
		});
	}

	componentWillReceiveProps({ user }) {
		const { id, fullName, city, email, telephone } = user;

		this.setState({
			user: {
				id: id,
				fullName: this.generateField(
					{ value: fullName || '' },
					'fullName',
					this.handleUserInput
				),
				city: this.generateField(
					{ value: city || '' },
					'city',
					this.handleUserInput
				),
				email: this.generateField(
					{ value: email || '' },
					'email',
					this.handleUserInput
				),
				telephone: this.generateField(
					{ value: telephone || '' },
					'telephone',
					this.handleUserInput
				)
			}
		});
	}

	handleSubmit(event) {
		this.validate();

		if (this.validator.hasErrors()) {
			event.preventDefault();
		}
	}

	validate() {
		this.handleUserInput('fullName', this.state.user.fullName.value);
		this.handleUserInput('telephone', this.state.user.telephone.value);
		this.handleUserInput('city', this.state.user.city.value);
	}

	render() {
		const { height } = styles;

		return (
			<Grid style={{ marginTop: height }}>
				<Cell size={SIX_COLUMNS} desktopOffset={THREE_COLUMNS}>
					<h2>Your Account!</h2>

					<AccountEditForm
						csrfToken={this.state.csrfToken}
						userId={this.state.user.id}
						fullName={this.state.user.fullName}
						telephone={this.state.user.telephone}
						email={this.state.user.email}
						city={this.state.user.city}
						onSubmit={this.handleSubmit}
					/>
				</Cell>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return { ...state, user: state.user || {} };
};

export default connect(mapStateToProps)(AccountEdit);
