import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDR9nwVR2jhQRWwnRwrhm4VDraWc12nrJQ"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
