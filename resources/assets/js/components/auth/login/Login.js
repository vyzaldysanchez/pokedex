import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from 'react-md';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      csrfToken: ''
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
