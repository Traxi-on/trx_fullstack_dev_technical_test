import React, { useEffect, useState } from 'react';
import TrackingMap from '../../../components/TrackingMap/TrackingMap';
import TrackingRouteService from '../../../services/routeTrackingService/trackingRouteService';
import CoordinateInterface from '../../../interfaces/coordinateInterface';
import Navbar from '../../../components/Navbar/Navbar';

const Home: React.FC = () => {
    const [trackingRoutes, setTrackingRoutes] = useState<CoordinateInterface[]>([]);
    useEffect(() => {
        getRoutes()


    }, [])

    const getRoutes = async () => {
        try {
            const trackingRoutesData = await TrackingRouteService.getRouteCoordinates();
            setTrackingRoutes(trackingRoutesData);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div data-testid='Home'>
            <Navbar trackingRoutes={trackingRoutes} data-testid='navbar'/>
            <div className="header">
                <TrackingMap routeCoordinates={trackingRoutes} data-testid='tracking-map'/>
            </div>
        </div>
    );
}

export default Home;
