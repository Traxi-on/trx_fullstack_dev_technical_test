import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import route from '../../public/assets/exampleRoute.json'
import EventBus from './EventBus';

const containerStyle = {
  height: '600px',
  width: '100%',
  margin: 'auto',
  marginBottom: '1em'
};

const center = {
  lng: -99.14435051803017,
  lat: 19.407284909983332
};

function Map() {
  const [vehicle, setVehicle]: any = useState(null)

  useEffect(() => {
    EventBus.on("couponApply", (data: any) => {
      setVehicle(data.vehicle);
    });
  }, [])


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script', 
    googleMapsApiKey: "AIzaSyBcz5xnXpAK4nVaZ1ElWQcO7ZCS2cl2FLw"
  })

  const lineArray: any[] = []
  route.features[0].geometry.coordinates.map((coord, index) => {
    lineArray.push({ lat: coord[1], lng: coord[0] })
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Polyline
        path={lineArray}
        options={{
          strokeColor: "#D0DF00",
          strokeWeight: 4
        }}
      />
      { vehicle &&
        <Marker position={{ lng: vehicle.lng, lat: vehicle.lat }} options={{
          icon: {
            url: '/img/truck.png',
            scaledSize: new google.maps.Size(30, 20),
            fillColor: 'red'
          }
        }}/>
      }
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
