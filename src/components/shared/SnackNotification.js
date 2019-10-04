import React, { Component } from 'react';
import { Snackbar } from 'react-md';
import { connect } from 'react-redux';
import { withNotifications } from '../pokedex/state-props-mappers';
import { REMOVE_NOTIFICATION } from '../pokedex/actions';

class SnackNotification extends Component {
	constructor(props) {
		super(props);

		this.dismissToast = this.dismissToast.bind(this);
	}

	dismissToast() {
		const { toasts, autohide } = this.props.notifications;

		this.props.dispatch({
			type: REMOVE_NOTIFICATION,
			payload: { toasts, autohide }
		});
    }

	render() {
		const { toasts, autohide } = this.props.notifications;

		return (
			<div className="snack-notification-container">
				<Snackbar
					id="snack-notification"
					toasts={toasts}
					autohide={autohide}
					onDismiss={this.dismissToast}
				/>
			</div>
		);
	}
}

export default connect(withNotifications.mapStateToProps)(SnackNotification);
