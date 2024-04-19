import React from 'react';
import { render } from '@testing-library/react';
import TrackingMap from './TrackingMap';
import CoordinateInterface from '../../interfaces/coordinateInterface';
import { MemoryRouter } from 'react-router-dom';

// Mock de la función useJsApiLoader para evitar errores en las pruebas
jest.mock('@react-google-maps/api', () => ({
  useJsApiLoader: jest.fn(() => ({ isLoaded: true })),
}));

describe('TrackingMap component', () => {
  it('renders without crashing', () => {
    const routeCoordinates: CoordinateInterface[] = [
      { lat: 40.7128, lng: -74.006 },
      { lat: 34.0522, lng: -118.2437 },
      { lat: 41.8781, lng: -87.6298 },
    ];

    render(<TrackingMap routeCoordinates={routeCoordinates} />);
    
  });

});
