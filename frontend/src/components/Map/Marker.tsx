import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Propiedades personalizadas para tu marcador
type MarkerProps = {
  position: L.LatLngExpression;
  popupText: string;
};

const MarkerComponent: React.FC<MarkerProps> = ({ position, popupText }) => {
  return (
    <Marker position={position}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
};

export default MarkerComponent;