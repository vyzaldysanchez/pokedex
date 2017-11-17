import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, TextField, Button } from 'react-md';

class Login extends Component {
  render() {
    return (
      <div>
        <Grid className="login">
          <Cell size={8} desktopOffset={2}>
            <h1 className="text-center md-text--theme-primary">Enter your pokedex</h1>

            <form>
              <TextField
                id="username"
                label="Enter your username."
                lineDirection="right"
                className="md-cell--bottom"
              />
              <TextField
                id="password"
                label="Type in your password."
                lineDirection="right"
                className="md-cell--bottom"
              />
              <Button raised primary>
                Enter
              </Button>
              <Button raised primary>
                Forgot password?
              </Button>
            </form>
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
