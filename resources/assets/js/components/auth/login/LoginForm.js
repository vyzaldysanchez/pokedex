import React from 'react';
import { Cell, TextField, Button } from 'react-md';

const LoginForm = props => (
  <form method="POST" onSubmit={props.onSubmit}>
    <input type="hidden" name="_token" value={props.csrfToken} />
    <TextField
      id="username"
      name="username"
      label="Enter your username."
      lineDirection="right"
      className="md-cell--bottom"
      required
      value={props.username.value}
      onChange={username => props.username.onChange(username)}
      error={props.username.displayError}
      errorText={props.username.error}
    />
    <TextField
      id="password"
      name="password"
      type="password"
      label="Type in your password."
      lineDirection="right"
      className="md-cell--bottom"
      required
      value={props.password.value}
      onChange={password => props.password.onChange(password)}
      error={props.password.displayError}
      errorText={props.password.error}
    />
    <Cell size={12}>
      <Button raised primary type="submit">
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
