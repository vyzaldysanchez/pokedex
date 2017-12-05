import React from 'react';
import GoogleMapReact from 'google-map-react';

let lat, lng;

navigator.geolocation.getCurrentPosition(({ coords }) => {
	lat = coords.latitude;
	lng = coords.longitude;
});

export const Map = ({ height, position, width, zoom }) => (
	<GoogleMapReact
		zoom={zoom}
		style={{ position, height, width }}
		center={{ lat, lng }}
		bootstrapURLKeys={{
			key: process.env.MIX_MAPS_API_KEY
		}}
	/>
);

Map.defaultProps = {
	position: 'relative',
	height: 300,
	width: '100%',
	zoom: 15
};
