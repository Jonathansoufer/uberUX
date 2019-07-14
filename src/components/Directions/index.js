import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="YOUR GOOGLE API HERE"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
