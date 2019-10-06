import React, { Component, useState, useEffect } from 'react';
import { Grid, Cell } from 'react-md';
import LoginForm from './LoginForm';
import { validator } from './LoginFormValidator';
import { TWO_COLUMNS, EIGHT_COLUMNS } from '../../../utils/ui-columns';

function formIsValid() {
  return !validator.hasErrors();
}

function sendToForgotPassword() {
  document.location.href = '/password/recover';
}

export function Login(props) {
  const [csrfToken, setCsrfToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(function setupCSRFToken() {
    setCsrfToken(
      document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('value'),
    );
  }, []);

  function onUsernameChange(value) {
    validator.validate({ field: 'username', value });
    setUsername(value);
  }

  function onPasswordChange(value) {
    validator.validate({ field: 'password', value });
    setPassword(value);
  }

  function validate() {
    validator.validate({ field: 'username', value: username });
    validator.validate({ field: 'password', value: password });
  }

  function handleSubmit(e) {
		validate();

		if (!formIsValid()) {
			e.preventDefault();
		}
  }

  return (
    <div>
      <Grid className="login">
        <Cell size={EIGHT_COLUMNS} desktopOffset={TWO_COLUMNS}>
          <h1 className="text-center md-text--theme-primary no-margin-top">
            Enter your pokedex
          </h1>

          <LoginForm
            csrfToken={csrfToken}
            username={username}
            password={password}
            onForgotPassword={sendToForgotPassword}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
            onSubmit={handleSubmit}
          />
        </Cell>
      </Grid>
    </div>
  );
}
