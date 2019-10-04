import React, { Component } from 'react';
import { Cell, Grid, CircularProgress } from 'react-md';
import { connect } from 'react-redux';
import axios from 'axios';
import {
	THREE_COLUMNS,
	NINE_COLUMNS,
} from '../../../utils/ui-columns';
import { styles } from '../header/styles-vars';
import PokedexSearch from './PokedexSearch';
import pokemons from '../../../services/pokemons.service';
import PokedexList from './PokedexList';
import { fixedRight } from '../../../utils/styles';
import InfiniteScroll from 'react-infinite-scroll-component';

class PokedexBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			nextPokemonsUrl: '',
			currentPage: 0,
			lastPage: 0,
			hasMorePokemons: true
		};

		this.loadPokemons = this.loadPokemons.bind(this);
		this.updatePokemons = this.updatePokemons.bind(this);
	}

	componentDidMount() {
		pokemons.getAll().then(this.updatePokemons);
	}

	componentWillReceiveProps({ pokemons }) {
		this.updatePokemons(pokemons, true);
	}

	loadPokemons() {
		const { pokemons, nextPokemonsUrl, hasMorePokemons } = this.state;

		if (hasMorePokemons) {
			axios
				.get(nextPokemonsUrl)
				.then(({ data }) => this.updatePokemons(data));
		} else {
			this.setState({ hasMorePokemons: false });
		}
	}

	updatePokemons(
		{ data, next_page_url, current_page, last_page },
		reset = true
	) {
		const { pokemons } = this.state;
		const newPokemons = data || [];

		this.setState({
			pokemons: reset ? newPokemons : [...pokemons, ...newPokemons],
			currentPage: current_page,
			lastPage: last_page,
			nextPokemonsUrl: next_page_url,
			hasMorePokemons: !!next_page_url
		});
	}

	render() {
		const { height } = styles;
		const { pokemons, isLoading, nextPokemonsUrl } = this.state;

		return (
			<Grid
				noSpacing
				className="pokedex-body"
				style={{ marginTop: height }}
			>
				<Cell size={NINE_COLUMNS}>
					<InfiniteScroll
						next={this.loadPokemons}
						hasMore={this.state.hasMorePokemons}
						loader={<CircularProgress id="pokemons-loader" />}
						style={{ overflow: 'hidden' }}
					>
						<PokedexList pokemons={pokemons} />
					</InfiniteScroll>
				</Cell>
				<Cell size={THREE_COLUMNS} style={fixedRight}>
					<PokedexSearch />
				</Cell>
			</Grid>
		);
	}
}

const mapStateToProps = ({ pokemons }) => ({
	pokemons: pokemons
});

export default connect(mapStateToProps)(PokedexBody);
