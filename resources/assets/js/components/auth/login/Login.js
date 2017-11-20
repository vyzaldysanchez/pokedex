import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from 'react-md';
import LoginForm from './LoginForm';
import { validator } from './LoginFormValidator';

class Login extends Component {
  constructor(props) {
    super(props);

    this.validator = validator;
    this.state = {
      csrfToken: '',
      username: {
        value: '',
        displayError: this.validator.fields.username.displayError,
        error: this.validator.fields.username.error,
        onChange: value => {
          this.validator.fields.username.validate(value);
          this.setState({ username: { ...this.state.username, value } });
        }
      },
      password: {
        value: '',
        displayError: this.validator.fields.password.displayError,
        error: this.validator.fields.password.error,
        onChange: value => {
          this.validator.fields.password.validate(value);
          this.setState({ password: { ...this.state.password, value } });
        }
      }
    };
  }

  sendToForgotPassword() {
    document.location.href = '/password/recover';
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
        <Grid className="login">
          <Cell size={8} desktopOffset={2}>
            <h1 className="text-center md-text--theme-primary no-margin-top">
              Enter your pokedex
            </h1>

            <LoginForm
              csrfToken={this.state.csrfToken}
              username={this.state.username}
              password={this.state.password}
              onForgotPassword={this.sendToForgotPassword}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

const loginContainer = document.getElementById('pokedex-login');

if (loginContainer) {
  ReactDOM.render(<Login />, loginContainer);
}
