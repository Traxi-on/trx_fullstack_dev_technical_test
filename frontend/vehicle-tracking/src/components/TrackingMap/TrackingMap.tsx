import React from 'react';
import { GoogleMap, Polyline, useJsApiLoader } from '@react-google-maps/api';
import CoordinateInterface from '../../interfaces/coordinateInterface';


interface TrackingMapProps {
    routeCoordinates: CoordinateInterface[];
}

const TrackingMap: React.FC<TrackingMapProps> = ({ routeCoordinates }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_API_KEY_GOOGLE}`,
    });
    const middleIndex = Math.floor(routeCoordinates.length / 2);

    return (
        <main>
            {isLoaded && (
                <GoogleMap
                    center={{ lat: routeCoordinates[middleIndex].lat, lng: routeCoordinates[middleIndex].lng }}
                    zoom={15}
                    mapContainerStyle={{
                        height: '92vh', width: '100%',
                    }}
                >
                    <Polyline
                        path={routeCoordinates}
                        options={{
                            strokeColor: '#FF0000',
                            strokeOpacity: 1.0,
                            strokeWeight: 4
                        }}
                    />
                </GoogleMap>
            )}
        </main>
    );
}

export default TrackingMap;
