import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';

export class Map extends Component {
	constructor(props) {
		super(props);

		this.state = { lat: this.props.lat, lng: this.props.lng };

		this.updatePinLocation = this.updatePinLocation.bind(this);
	}

	componentDidMount() {
		if (this.props.currentLocationAsDefault) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				this.setState({ lat: coords.latitude, lng: coords.longitude });
			});
		}
	}

	componentWillReceiveProps({ lat, lng }) {
		if (lat && lng) {
			this.setState({ lat: lat, lng: lng });
		}
	}

	updatePinLocation({ lat, lng }) {
		this.setState({ lat, lng });
		this.props.onPositionSelected({ lat, lng });
	}

	render() {
		const { lat, lng } = this.state;
		const { zoom, position, height, width } = this.props;

		return (
			<GoogleMapReact
				zoom={zoom}
				style={{ position, height, width }}
				center={{ lat, lng }}
				bootstrapURLKeys={{
					key: process.env.MIX_MAPS_API_KEY
				}}
				onClick={this.updatePinLocation}
			>
				<MapMarker lat={lat} lng={lng} />
			</GoogleMapReact>
		);
	}
}

Map.propTypes = {
	position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	zoom: PropTypes.number,
	onPositionSelected: PropTypes.func,
	lat: PropTypes.number,
	lng: PropTypes.number,
	currentLocationAsDefault: PropTypes.bool
};

Map.defaultProps = {
	position: 'relative',
	height: 300,
	width: '100%',
	zoom: 17,
	currentLocationAsDefault: true,
	onPositionSelected: () => null
};
