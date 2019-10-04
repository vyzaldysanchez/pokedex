import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Login } from './components/auth/login/Login';
import { RegistrationForm } from './components/auth/registration/RegistrationForm';
import { Pokedex } from './components/pokedex/Pokedex';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Pokedex />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/sign-up">
          <RegistrationForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
