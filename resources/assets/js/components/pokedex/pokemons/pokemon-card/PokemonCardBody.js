import React, { Component } from 'react';
import { Button, CardText, Collapse, Divider } from 'react-md';
import { LabelChip } from '@pokedex/assets/js/components/shared/LabelChip';
import { Map } from '@pokedex/assets/js/components/shared/maps/Map';

export class PokemonCardBody extends Component {
	constructor(props) {
		super(props);

		this.state = { mapCollapsed: true };

		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse() {
		this.setState({ mapCollapsed: !this.state.mapCollapsed });
	}

	getButtonText() {
		return this.state.mapCollapsed
			? 'See Map Location'
			: 'Hide Map Location';
	}

	render() {
		const { types = [], age, pounds, description, location } = this.props;
		const { mapCollapsed } = this.state;

		return (
			<CardText>
				<div>
					{types.map((type, id) => (
						<LabelChip
							backgroundColor={type.color}
							label={type.name}
							key={id}
						/>
					))}
				</div>

				<div>
					<b>Age:</b> {age}
					<br />
					<b>Weight:</b> {pounds}
				</div>

				<div style={{ marginTop: 10 }}>
					<p>{description}</p>
				</div>

				<div style={{ marginTop: 10 }}>
					<Button raised onClick={this.toggleCollapse}>
						{this.getButtonText()}
					</Button>

					<Collapse collapsed={mapCollapsed} animate={false}>
						<Map
							updatePinLocation={false}
							currentLocationAsDefault={false}
							lat={location.latitude}
							lng={location.longitude}
						/>
					</Collapse>
				</div>
			</CardText>
		);
	}
}
