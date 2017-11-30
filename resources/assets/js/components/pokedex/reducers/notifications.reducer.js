export const addNotification = (state, { autohide, toast }) => {
	const prevToasts = state.notifications.toasts;

	return {
		...state,
		notifications: {
			toasts: [...prevToasts, toast],
			autohide
		}
	};
};

export const removeNotification = (state, payload) => {
	const [, ...toasts] = payload.toasts; // Removes the first element without mutating!
	return {
		...state,
		notifications: { toasts, autohide: action.payload.autohide }
	};
};
