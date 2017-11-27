import axios from 'axios';

export default {
	getAll() {
		return axios.get('/api/pokemons/types').then(({ data }) => data || []);
	}
};
