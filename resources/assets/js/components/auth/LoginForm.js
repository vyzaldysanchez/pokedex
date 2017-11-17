import React from 'react';
import { TextField, Button } from 'react-md';

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
  </form>
);

export default LoginForm;
