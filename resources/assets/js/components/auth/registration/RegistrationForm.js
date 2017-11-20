import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, TextField, Button } from 'react-md';
import { validator } from './RegistrationFormValidator';

class RegistrationForm extends Component {
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
      formIsValid: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  validate() {
    this.handleUserInput('fullName', this.state.fullName);
    this.handleUserInput('telephone', this.state.telephone);
    this.handleUserInput('city', this.state.city);
    this.handleUserInput('email', this.state.email);
    this.handleUserInput('username', this.state.username);
    this.handleUserInput('password', this.state.password);
    this.handleUserInput(
      'passwordConfirmation',
      this.state.passwordConfirmation
    );
  }

  handleUserInput(fieldName, value) {
    this.validator.fields[fieldName].validate(value);
    this.setState({ [`${fieldName}`]: value });
  }

  render() {
    return (
      <div>
        <Grid className="registration-form">
          <Cell size={8} desktopOffset={2}>
            <h1 className="text-center md-text--theme-primary no-margin-top">
              Create an account
            </h1>

            <form>
              <Cell size={6}>
                <TextField
                  id="fullName"
                  label="Your full name here!"
                  lineDirection="right"
                  className="md-cell--bottom"
                  required
                  value={this.state.fullName}
                  onChange={fullName =>
                    this.handleUserInput('fullName', fullName)}
                  error={this.validator.fields.fullName.displayError}
                  errorText={this.validator.fields.fullName.error}
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="tel"
                  type="tel"
                  label="Your telephone here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                  required
                  value={this.state.telephone}
                  onChange={telephone =>
                    this.handleUserInput('telephone', telephone)}
                  error={this.validator.fields.telephone.displayError}
                  errorText={this.validator.fields.telephone.error}
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="city"
                  label="Your city here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                  required
                  value={this.state.city}
                  onChange={city => this.handleUserInput('city', city)}
                  error={this.validator.fields.city.displayError}
                  errorText={this.validator.fields.city.error}
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="email"
                  type="email"
                  label="Your email!"
                  lineDirection="left"
                  className="md-cell--bottom"
                  required
                  value={this.state.email}
                  onChange={email => this.handleUserInput('email', email)}
                  error={this.validator.fields.email.displayError}
                  errorText={this.validator.fields.email.error}
                />
              </Cell>
              <Cell size={12}>
                <TextField
                  id="username"
                  label="Your username!"
                  lineDirection="right"
                  className="md-cell--bottom"
                  required
                  value={this.state.username}
                  onChange={username =>
                    this.handleUserInput('username', username)}
                  error={this.validator.fields.username.displayError}
                  errorText={this.validator.fields.username.error}
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="password"
                  type="password"
                  label="Your password here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                  required
                  value={this.state.password}
                  onChange={password =>
                    this.handleUserInput('password', password)}
                  error={this.validator.fields.password.displayError}
                  errorText={this.validator.fields.password.error}
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="password_confirmation"
                  type="password"
                  label="Confirm your password here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                  required
                  value={this.state.passwordConfirmation}
                  onChange={passwordConfirmation =>
                    this.handleUserInput(
                      'passwordConfirmation',
                      passwordConfirmation
                    )}
                  error={
                    this.validator.fields.passwordConfirmation.displayError
                  }
                  errorText={this.validator.fields.passwordConfirmation.error}
                />
              </Cell>
              <Cell size={12}>
                <Button raised primary>
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
