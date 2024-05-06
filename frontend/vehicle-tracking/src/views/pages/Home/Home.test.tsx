import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import TrackingRouteService from '../../../services/routeTrackingService/trackingRouteService';

// Mock de la función getRouteCoordinates de TrackingRouteService
jest.mock('../../../services/routeTrackingService/trackingRouteService', () => ({
    getRouteCoordinates: jest.fn(),
}));

describe('Home component', () => {
    it('renders tracking routes', async () => {
        const mockTrackingRoutes = [
            { lat: 40.7128, lng: -74.006 },
            { lat: 34.0522, lng: -118.2437 },
            { lat: 41.8781, lng: -87.6298 },
        ];

        (TrackingRouteService.getRouteCoordinates as jest.Mock).mockResolvedValue(mockTrackingRoutes);

        const { getByTestId } = render(<Home />);

        expect(getByTestId('home')).toBeDefined();

        expect(TrackingRouteService.getRouteCoordinates).toHaveBeenCalledTimes(1);

       
    });

});
