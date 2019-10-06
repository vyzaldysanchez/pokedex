import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Toolbar } from 'react-md';
import PokedexNav from './PokedexNav';
import PokedexAccountBox from '../../pokedex/account-box/PokedexAccountBox';
import { styles } from './styles-vars';
import { LOAD_USER } from '../actions';
import users from '../../../services/users.service';

function renderHomeButton(sendToHome) {
  return (
    <Button icon primary onClick={sendToHome}>
      Home
    </Button>
  );
}

function renderNav({ toggleAccountBox, sendToAddPokemon }) {
  return (
    <PokedexNav
      className="md-paper--2"
      onDisplayAccountBox={toggleAccountBox}
      onAddPokemon={sendToAddPokemon}
    />
  );
}

function PokedexHeader({ user, dispatch, sendToAccountEdit, sendToAddPokemon, sendToHome }) {
  const [accountBoxCollapsed, setAccountBoxCollapse] = useState(true);

  useEffect(function loadUser() {
    (async () => {
      if (!Object.keys(user).length) {
        const { data } = await users.getCurrent();

        dispatch({ type: LOAD_USER, payload: data });
      }
    })();
  }, [user, dispatch]);

  function toggleAccountBox() {
		setAccountBoxCollapse(!accountBoxCollapsed);
	}

	function triggerSendToAccountEdit() {
    setAccountBoxCollapse(true);
		sendToAccountEdit();
	}

	function triggerSendToHome() {
		setAccountBoxCollapse(true);
		sendToHome();
	}

	function triggerSendToAddPokemon() {
		setAccountBoxCollapse(true);
		sendToAddPokemon();
  }

  return (
    <div className="pokedex-header">
      <Toolbar
        id="pokemon-toolbar"
        fixed
        colored
        title="Pokedex"
        titleStyle={{ fontWeight: 900 }}
        style={{ ...styles }}
        nav={renderHomeButton(triggerSendToHome)}
        actions={renderNav({ toggleAccountBox, sendToAddPokemon: triggerSendToAddPokemon })}
      />
      <PokedexAccountBox
        collapsed={accountBoxCollapsed}
        user={user}
        onSendToAccountEdit={triggerSendToAccountEdit}
      />
    </div>
  );
}

const mapStateToProps = state => ({ ...state, user: state.user || {} });

export default connect(mapStateToProps)(PokedexHeader);
