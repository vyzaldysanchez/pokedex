import React from 'react';
import { Cell, TextField, Button } from 'react-md';

const LoginForm = props => (
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
    <Cell size={12}>
      <Button raised primary>
        Enter
      </Button>
      <Button
        raised
        primary
        swapTheming
        className="pull-right"
        onClick={props.onForgotPassword}
      >
        Forgot password?
      </Button>
    </Cell>
    <Cell size={6} desktopOffset={3} className="text-center">
      <p>
        Has no account yet? <a href="/register">Register</a>
      </p>
    </Cell>
  </form>
);

export default LoginForm;
