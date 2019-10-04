import axios from 'axios';

export default {
	getAll() {
		return axios.get('/api/pokemons/types').then(({ data }) => data || []);
	},
	removeTypeFromCollection(typeIndex, collection) {
		return [
			...collection.slice(0, typeIndex),
			...collection.slice(typeIndex + 1)
		];
	}
};
