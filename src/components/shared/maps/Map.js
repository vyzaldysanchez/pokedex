import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './MapMarker';

export function Map({
  zoom,
  position,
  height,
  width,
  lat,
  lng,
  currentLocationAsDefault,
  onPositionSelected,
  updatePinLocation,
}) {
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lng);

  useEffect(() => {
    if (currentLocationAsDefault) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
			});
    }
  }, [currentLocationAsDefault]);

  useEffect(() => {
    if (lat && lng) {
      setLatitude(lat);
      setLongitude(lng);
		}
  }, [lat, lng]);

  function triggerPinLocationUpdate({ lat, lng }) {
		if (updatePinLocation) {
			setLatitude(lat);
      setLongitude(lng);
			onPositionSelected({ lat, lng });
		}
  }

  return (
    <GoogleMapReact
      zoom={zoom}
      style={{ position, height, width }}
      center={{ lat: latitude, lng: longitude }}
      bootstrapURLKeys={{
        key: process.env.MIX_MAPS_API_KEY,
      }}
      onClick={triggerPinLocationUpdate}
    >
      <MapMarker lat={latitude} lng={longitude} />
    </GoogleMapReact>
  );
}

Map.propTypes = {
	position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	zoom: PropTypes.number,
	onPositionSelected: PropTypes.func,
	lat: PropTypes.number,
	lng: PropTypes.number,
	currentLocationAsDefault: PropTypes.bool,
	updatePinLocation: PropTypes.bool,
};

Map.defaultProps = {
	position: 'relative',
	height: 300,
	width: '100%',
	zoom: 17,
	currentLocationAsDefault: true,
	updatePinLocation: true,
	onPositionSelected: () => null,
};
