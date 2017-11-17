import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, TextField, Button } from 'react-md';

class RegistrationForm extends Component {
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
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="tel"
                  type="tel"
                  label="Your telephone here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="city"
                  label="Your city here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="email"
                  type="email"
                  label="Your email!"
                  lineDirection="left"
                  className="md-cell--bottom"
                />
              </Cell>
              <Cell size={12}>
                <TextField
                  id="username"
                  label="Your username!"
                  lineDirection="right"
                  className="md-cell--bottom"
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="password"
                  type="password"
                  label="Your password here!"
                  lineDirection="left"
                  className="md-cell--bottom"
                />
              </Cell>
              <Cell size={6}>
                <TextField
                  id="password_confirmation"
                  type="password"
                  label="Confirm your password here!"
                  lineDirection="left"
                  className="md-cell--bottom"
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
