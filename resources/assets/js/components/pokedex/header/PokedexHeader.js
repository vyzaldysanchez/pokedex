import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Button, Toolbar } from 'react-md';
import PokedexNav from './PokedexNav';
import PokedexAccountBox from '@pokedex/assets/js/components/pokedex/account-box/PokedexAccountBox';
import { styles } from './styles-vars';

export class PokedexHeader extends Component {
	constructor(props) {
		super(props);

		this.state = { accountBoxCollapsed: true, user: {} };
		this.toggleAccountBox = this.toggleAccountBox.bind(this);
		this.sendToAccountEdit = this.sendToAccountEdit.bind(this);
        this.sendToHome = this.sendToHome.bind(this);
        this.renderHomeButton = this.renderHomeButton.bind(this);
	}

	componentDidMount() {
		axios
			.get('/api/user')
			.then(({ data }) => this.setState({ user: data }));
	}

	toggleAccountBox() {
		this.setState({ accountBoxCollapsed: !this.state.accountBoxCollapsed });
	}

	sendToAccountEdit() {
		this.setState({ accountBoxCollapsed: true });
		this.props.sendToAccountEdit();
	}

	sendToHome() {
		this.setState({ accountBoxCollapsed: true });
		this.props.sendToHome();
	}

	renderHomeButton() {
		return (
			<Button icon primary onClick={this.sendToHome}>
				home
			</Button>
		);
	}

	render() {
		return (
			<div className="pokedex-header">
				<Toolbar
					id="pokemon-toolbar"
					fixed
					colored
					title="Pokedex"
					titleStyle={{ fontWeight: 900 }}
					style={{ ...styles }}
					nav={this.renderHomeButton()}
					actions={
						<PokedexNav
							className="md-paper--2"
							onClick={this.toggleAccountBox}
						/>
					}
				/>
				<PokedexAccountBox
					collapsed={this.state.accountBoxCollapsed}
					user={this.state.user}
					onSendToAccountEdit={this.sendToAccountEdit}
				/>
			</div>
		);
	}
}
