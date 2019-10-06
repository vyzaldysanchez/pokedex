import React, { useState, useEffect } from 'react';
import { Grid, Cell, TextField, Button } from 'react-md';
import { validator } from './RegistrationFormValidator';
import {
	EIGHT_COLUMNS,
	SIX_COLUMNS,
	TWELVE_COLUMNS,
  TWO_COLUMNS,
} from '../../../utils/ui-columns';
import commonFormatter from '../../../utils/common-formatter';

function formIsValid() {
  return !validator.hasErrors();
}

export function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [csrfToken, setCSRFToken] = useState('');

  useEffect(() => {
    setCSRFToken(
      document
				.querySelector('meta[name="csrf-token"]')
				.getAttribute('value'),
    );
  }, []);

  function validate() {
    validator.validate({ field: 'fullName', value: fullName });
    validator.validate({ field: 'telephone', value: telephone });
    validator.validate({ field: 'city', value: city });
    validator.validate({ field: 'email', value: email });
    validator.validate({ field: 'username', value: username });
    validator.validate({ field: 'password', value: password, nextValue: passwordConfirmation });
    validator.validate({ field: 'username', value: passwordConfirmation, nextValue: password });
  }

  function handleSubmit(event) {
    validate();

    if (!formIsValid()) {
      event.preventDefault();
    }
  }

  return (
    <div>
      <Grid className="registration-form">
        <Cell size={EIGHT_COLUMNS} desktopOffset={TWO_COLUMNS}>
          <h1 className="text-center md-text--theme-primary no-margin-top">
            Create an account
          </h1>

          <form method="POST" onSubmit={handleSubmit}>
            <Cell size={SIX_COLUMNS}>
              <input
                type="hidden"
                name="_token"
                value={csrfToken}
              />
              <TextField
                id="fullName"
                name="fullName"
                label="Your full name here!"
                lineDirection="right"
                className="md-cell--bottom"
                required
                value={fullName}
                onChange={(fullName) => {
                  validator.validate({ field: 'fullName', value: fullName });
                  setFullName(fullName);
                }}
                error={validator.getDisplayError('fullName')}
                errorText={validator.getError('fullName')}
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
                value={commonFormatter.formatTelephone(telephone)}
                maxLength={14}
                onChange={(telephone) => {
                  const phone = telephone.replace(/\D/g, '');
                  validator.validate({ field: 'telephone', value: phone });
                  setTelephone(phone);
                }}
                error={validator.getDisplayError('telephone')}
                errorText={validator.getError('telephone')}
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
                value={city}
                onChange={(city) => {
                  validator.validate({ field: 'city', value: city });
                  setCity(city);
                }}
                error={validator.getDisplayError('city')}
                errorText={validator.getError('city')}
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
                value={email}
                onChange={(email) => {
                  validator.validate({ field: 'email', value: email });
                  setEmail(email);
                }}
                error={validator.getDisplayError('email')}
                errorText={validator.getError('email')}
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
                value={username}
                onChange={(username) => {
                  validator.validate({ field: 'username', value: username });
                  setUsername(username);
                }}
                error={validator.getDisplayError('username')}
                errorText={validator.getError('username')}
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
                value={password}
                onChange={(password) => {
                  validator.validate({ field: 'password', value: password, nextValue: passwordConfirmation });
                  setPassword(password);
                }}
                error={validator.getDisplayError('password')}
                errorText={validator.getError('password')}
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
                onChange={(passwordConfirmation) => {
                  validator.validate({ field: 'passwordConfirmation', value: passwordConfirmation, nextValue: password });
                  setPasswordConfirmation(passwordConfirmation);
                }}
                error={validator.getDisplayError('passwordConfirmation')}
                errorText={validator.getError('passwordConfirmation')}
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
