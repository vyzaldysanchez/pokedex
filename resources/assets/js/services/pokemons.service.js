import axios from 'axios';

export default {
	getAll() {
		return axios.get('/api/pokemons').then(({ data }) => data || []);
	},
	find(id) {
		return axios.get(`/api/pokemons/${id}`).then(({ data }) => data || {});
	}
};
