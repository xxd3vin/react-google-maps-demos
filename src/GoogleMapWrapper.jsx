import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

const GoogleMapWrapper = props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        defaultDraggable
        onClick={props.onMarkerClick}
      />
    )}
    {props.children}
  </GoogleMap>
);

export default GoogleMapWrapper;
