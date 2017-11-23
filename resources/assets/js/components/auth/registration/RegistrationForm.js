import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, TextField, Button } from 'react-md';
import { validator } from './RegistrationFormValidator';
import * as axios from 'axios';
import {
	EIGHT_COLUMNS,
	SIX_COLUMNS,
	TWELVE_COLUMNS
} from '@pokedex/assets/js/utils/ui-columns';

export class RegistrationForm extends Component {
	constructor(props) {
		super(props);

		this.validator = validator;
		this.state = {
			fullName: '',
			telephone: '',
			city: '',
			email: '',
			username: '',
			password: '',
			passwordConfirmation: '',
			csrfToken: ''
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	get telephone() {
		return this.state.telephone.replace(
			/^(\d{3})(\d{3})(\d{4})$/,
			'($1) $2-$3'
		);
	}

	validate() {
		this.handleUserInput('fullName', this.state.fullName);
		this.handleUserInput('telephone', this.state.telephone);
		this.handleUserInput('city', this.state.city);
		this.handleUserInput('email', this.state.email);
		this.handleUserInput('username', this.state.username);
		this.handlePasswordInput(
			this.state.password,
			this.state.passwordConfirmation
		);
		this.handlePasswordInput(
			this.state.passwordConfirmation,
			this.state.password,
			'passwordConfirmation'
		);
	}

	formIsValid() {
		return !this.validator.hasErrors();
	}

	handleUserInput(fieldName, value) {
		this.validator.fields[fieldName].validate(value);
		this.setState({ [`${fieldName}`]: value });
	}

	handlePasswordInput(value, valueConfirmation, passwordField = 'password') {
		this.validator.fields[passwordField].validate(value, valueConfirmation);
		this.setState({ [`${passwordField}`]: value });
	}

	handleSubmit(event) {
		this.validate();
		if (!this.formIsValid()) {
			event.preventDefault();
		}
	}

	componentDidMount() {
		this.setState({
			csrfToken: document
				.querySelector('meta[name="csrf-token"]')
				.getAttribute('value')
		});
	}

	render() {
		return (
			<div>
				<Grid className="registration-form">
					<Cell size={EIGHT_COLUMNS}>
						<h1 className="text-center md-text--theme-primary no-margin-top">
							Create an account
						</h1>

						<form method="POST" onSubmit={this.handleSubmit}>
							<Cell size={SIX_COLUMNS}>
								<input
									type="hidden"
									name="_token"
									value={this.state.csrfToken}
								/>
								<TextField
									id="fullName"
									name="fullName"
									label="Your full name here!"
									lineDirection="right"
									className="md-cell--bottom"
									required
									value={this.state.fullName}
									onChange={fullName =>
										this.handleUserInput(
											'fullName',
											fullName
										)
									}
									error={
										this.validator.fields.fullName
											.displayError
									}
									errorText={
										this.validator.fields.fullName.error
									}
								/>
							</Cell>
							<Cell size={SIX_COLUMNS}>
								<TextField
									id="tel"
									name="telephone"
									type="tel"
									label="Your telephone here!"
									lineDirection="left"
									className="md-cell--bottom"
									required
									value={this.telephone}
									maxLength={14}
									onChange={telephone =>
										this.handleUserInput(
											'telephone',
											telephone.replace(/\D/g, '')
										)
									}
									error={
										this.validator.fields.telephone
											.displayError
									}
									errorText={
										this.validator.fields.telephone.error
									}
								/>
							</Cell>
							<Cell size={SIX_COLUMNS}>
								<TextField
									id="city"
									name="city"
									label="Your city here!"
									lineDirection="left"
									className="md-cell--bottom"
									required
									value={this.state.city}
									onChange={city =>
										this.handleUserInput('city', city)
									}
									error={
										this.validator.fields.city.displayError
									}
									errorText={this.validator.fields.city.error}
								/>
							</Cell>
							<Cell size={SIX_COLUMNS}>
								<TextField
									id="email"
									name="email"
									type="email"
									label="Your email!"
									lineDirection="left"
									className="md-cell--bottom"
									required
									value={this.state.email}
									onChange={email =>
										this.handleUserInput('email', email)
									}
									error={
										this.validator.fields.email.displayError
									}
									errorText={
										this.validator.fields.email.error
									}
								/>
							</Cell>
							<Cell size={TWELVE_COLUMNS}>
								<TextField
									id="username"
									name="username"
									label="Your username!"
									lineDirection="right"
									className="md-cell--bottom"
									required
									value={this.state.username}
									onChange={username =>
										this.handleUserInput(
											'username',
											username
										)
									}
									error={
										this.validator.fields.username
											.displayError
									}
									errorText={
										this.validator.fields.username.error
									}
								/>
							</Cell>
							<Cell size={SIX_COLUMNS}>
								<TextField
									id="password"
									name="password"
									type="password"
									label="Your password here!"
									lineDirection="left"
									className="md-cell--bottom"
									required
									value={this.state.password}
									onChange={password =>
										this.handlePasswordInput(
											password,
											this.state.passwordConfirmation
										)
									}
									error={
										this.validator.fields.password
											.displayError
									}
									errorText={
										this.validator.fields.password.error
									}
								/>
							</Cell>
							<Cell size={SIX_COLUMNS}>
								<TextField
									id="password_confirmation"
									name="password_confirmation"
									type="password"
									label="Confirm your password here!"
									lineDirection="left"
									className="md-cell--bottom"
									required
									value={this.state.passwordConfirmation}
									onChange={passwordConfirmation =>
										this.handlePasswordInput(
											passwordConfirmation,
											this.state.password,
											'passwordConfirmation'
										)
									}
									error={
										this.validator.fields
											.passwordConfirmation.displayError
									}
									errorText={
										this.validator.fields
											.passwordConfirmation.error
									}
								/>
							</Cell>
							<Cell size={TWELVE_COLUMNS}>
								<Button raised primary type="submit">
									Create account
								</Button>
								<a href="/login" className="pull-right">
									Already have an account? Log in
								</a>
							</Cell>
						</form>
					</Cell>
				</Grid>
			</div>
		);
	}
}

const formContainer = document.getElementById('pokedex-user-registration');

if (formContainer) {
	ReactDOM.render(<RegistrationForm />, formContainer);
}
