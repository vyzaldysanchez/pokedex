import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PokedexTypesFilter } from '@pokedex/assets/js/components/pokedex/body/PokedexTypesFilter';

const mock = new MockAdapter(axios);

describe('<PokemonTypesFilter />', () => {
	let mock = null;
	let component = null;

	beforeEach(() => {
		mock = new MockAdapter(axios);
		mock.onGet('/api/pokemons/types').reply(200, []);
	});

	it('renders a chip for every pokemon type loaded.', async () => {
		component = mount(<PokedexTypesFilter />);

		component.setState({
			types: [
				{ id: 1, name: 'fire', color: 'red' },
				{ id: 2, name: 'water', color: 'blue' }
			]
		});

		expect(component.find('button .md-chip').length).toBe(2);
	});

	it('emits a onPokemonTypeSelected event with the type ID', () => {
		let typeId = 0;
		component = mount(
			<PokedexTypesFilter onPokemonTypeSelected={id => (typeId = id)} />
		);
		component.setState({
			types: [{ id: 1, name: 'Ghost' }]
		});

		component
			.find('Chip')
			.first()
			.simulate('click');

		expect(typeId).toBe(1);
	});
});
