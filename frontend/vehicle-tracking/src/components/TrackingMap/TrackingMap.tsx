import React from 'react';
import { GoogleMap, Polyline, useJsApiLoader } from '@react-google-maps/api';


const TrackingMap: React.FC = () => {



    // Coordenadas de ejemplo para la ruta
    const routeCoordinates = [
        { lat: 19.407284909983332, lng: -99.14435051803017 },
        { lat: 19.404773560390822, lng: -99.14486152573838 },
        { lat: 19.402389010749502, lng: -99.14510358202111 },
        { lat: 19.4025158493765, lng: -99.14279059976406 },
        { lat: 19.400871582047372, lng: -99.14317338044842 },
        { lat: 19.400508814414906, lng: -99.14048113787076 },
        { lat: 19.407522178609625, lng: -99.13949825566002 },
        { lat: 19.407723707593647, lng: -99.1377461612839 },
        { lat: 19.41469645662545, lng: -99.13672054506394 },
        { lat: 19.414817368711297, lng: -99.1376179592566 },
        { lat: 19.418404386333904, lng: -99.14355798653095 },
        { lat: 19.421507697260708, lng: -99.14334431648525 }
    ];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBJr2KmpYenq2HA4OsQ_eNPP94vrzyJJjo'
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
