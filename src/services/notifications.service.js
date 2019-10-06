import { ADD_NOTIFICATION } from '../components/pokedex/actions';

export const sendNotificationMessage = (dispatcher, text) => {
	dispatcher({
		type: ADD_NOTIFICATION,
		payload: { toast: { text }, autohide: true },
	});
};
