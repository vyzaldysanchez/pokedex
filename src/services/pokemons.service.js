import axios from 'axios';

export default {
	async getAll() {
    const { data } = await axios.get('/api/pokemons');

    return data || [];
	},

  async find(id) {
    const { data } = await axios.get(`/api/pokemons/${id}`);

    return data || {};
	},
};
