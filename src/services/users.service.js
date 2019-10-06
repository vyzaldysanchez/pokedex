import axios from 'axios';

export default {
	getCurrent() {
		return axios.get('/api/user');
	},
};
