import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 59.389937, lng: 16.465493 }}
    defaultOptions={{mapTypeControl: false}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 59.389937, lng: 16.465493 }} />}
  </GoogleMap>
))

export default MyMapComponent;
