import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';

export class Map extends Component {
	constructor(props) {
		super(props);

		this.state = { lat: null, lng: null };

		this.updatePinLocation = this.updatePinLocation.bind(this);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(({ coords }) =>
			this.setState({ lat: coords.latitude, lng: coords.longitude })
		);
	}

	updatePinLocation({ lat, lng }) {
		this.setState({ lat, lng });
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
	zoom: PropTypes.number
};

Map.defaultProps = {
	position: 'relative',
	height: 300,
	width: '100%',
	zoom: 17
};
