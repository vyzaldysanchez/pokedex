import React, { Component } from 'react';
import {
	Button,
	CardText,
	DialogContainer,
	FontIcon,
} from 'react-md';
import { LabelChip } from '../../../shared/LabelChip';
import { Map } from '../../../shared/maps/Map';

export class PokemonCardBody extends Component {
	constructor(props) {
		super(props);

		this.state = { mapCollapsed: true };

		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	getPrivacyIcon() {
		return this.props.isPublic ? 'visibility' : 'visibility_off';
	}

	getStatusIcon() {
		return this.props.captured ? 'copyright' : 'block';
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
					<FontIcon>{this.getStatusIcon()}</FontIcon>
					<FontIcon>{this.getPrivacyIcon()}</FontIcon>
				</div>

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

					<DialogContainer
						id="pokemon-deletion-confirmation"
						title="This pokemon was found at:"
						visible={!mapCollapsed}
						onHide={this.toggleCollapse}
						focusOnMount={false}
						width={500}
					>
						<Map
							updatePinLocation={false}
							currentLocationAsDefault={false}
							lat={location.latitude}
							lng={location.longitude}
							width={'100%'}
						/>
					</DialogContainer>
				</div>
			</CardText>
		);
	}
}
