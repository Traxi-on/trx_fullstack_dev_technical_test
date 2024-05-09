'use client'
import React,{useState,useCallback,useContext, useEffect} from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import { VehicleContext } from '../contexts/VehicleContext';
import MapStyle from "./MapStyle.json";

const containerStyle = {
  width: "90%",
  margin: "auto",
  height: '300px'
};

const center = {
  lat: 19.468700, 
  lng:  -99.138992
  //lat: 19.03793,
  //lng: -98.20346
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
    libraries: ["drawing", "visualization", "geometry", "places"]
  })

  const [map, setMap] = useState(null)
  const {vehiculoSeleccionado, setVehiculo}=useContext(VehicleContext);

  const onLoad = useCallback( async (map) => {
    
    let url=process.env.NEXT_PUBLIC_GEOJSON;
    const data=await getRoutes(url);
    map.data.addGeoJson(data[0].geojson);
    
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  useEffect( () => {
    if(map && vehiculoSeleccionado && vehiculoSeleccionado.latitud && vehiculoSeleccionado.longitud){
      const bounds = new google.maps.LatLngBounds({lat: vehiculoSeleccionado.latitud,lng: vehiculoSeleccionado.longitud});
      map.fitBounds(bounds);
      map.setZoom(15);
    }
   
  },[vehiculoSeleccionado,map])

  
  const getRoutes = async (URL) => {
    const response = await fetch(URL)
    const data     = await response.json();
    return data;
  }


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl:false,
          fullscreenControl: false,
          styles: MapStyle,
          zoom: 12,
          center : center
        }}
      >
        { vehiculoSeleccionado && 
          <Marker 
          position={{lat: vehiculoSeleccionado.latitud, lng:vehiculoSeleccionado.longitud}}
          icon={{
            url: '/assets/car.png',
            scaledSize: new google.maps.Size(30, 30)
          }}
           >

          </Marker>
        }
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)