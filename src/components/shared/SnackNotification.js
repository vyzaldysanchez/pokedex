import React from 'react';
import { Snackbar } from 'react-md';
import { connect } from 'react-redux';
import { withNotifications } from '../pokedex/state-props-mappers';
import { REMOVE_NOTIFICATION } from '../pokedex/actions';

function SnackNotification({ toasts, autohide, dispatch }) {
  function dismissToast() {
    dispatch({
      type: REMOVE_NOTIFICATION,
			payload: { toasts, autohide },
    });
  }

  return (
    <div className="snack-notification-container">
      <Snackbar
        id="snack-notification"
        toasts={toasts}
        autohide={autohide}
        onDismiss={dismissToast}
      />
    </div>
  );
}

export default connect(withNotifications.mapStateToProps)(SnackNotification);
