import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from '@pokedex/assets/js/components/pokedex/header/styles-vars';

class AccountEdit extends Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}

	render() {
		const { height } = styles;

		return <div style={{ marginTop: height }}>Hello, {this.props.user.fullName}!</div>;
	}
}

const mapStateToProps = state => {
	return { user: state.user || {} };
};

export default connect(mapStateToProps)(AccountEdit);
