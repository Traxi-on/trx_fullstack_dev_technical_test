import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useVehicle } from "../context/VehicleContext";

const MapView=()=>{    
    const mapRef = useRef(null);
    
    const [coordenadas, setCoordenadas]=useState([]); 
    const {marker,setMarker} =useVehicle();
    
    async function fetchData() {
        let x = await axios.get("https://iorm9noapi.execute-api.us-east-1.amazonaws.com/challenge/route/dummy1");
        var arr=[]; 
        var tmp=[]; 
        // for(let i=0; i<x.data[0].geojson.features.length; i++){
        //     if(x.data[0].geojson.features[i].geometry.type==='Point'){
        //         tmp.push(x.data[0].geojson.features[i].geometry.coordinates[1]);
        //         tmp.push(x.data[0].geojson.features[i].geometry.coordinates[0]);
        //         if(i===0)
        //             setMarker(tmp);
        //         arr.push(tmp);
        //         tmp=[];
        //     }                
        // }
        
        for(let i=0; i<x.data[0].geojson.features[6].geometry.coordinates.length; i++){            
            tmp.push(x.data[0].geojson.features[6].geometry.coordinates[i][1]);
            tmp.push(x.data[0].geojson.features[6].geometry.coordinates[i][0]);
            if(i===0)
                setMarker(tmp);
            arr.push(tmp);
            tmp=[];                        
        }                    
        setCoordenadas(arr);                      
    }

    useEffect(() => {
        //obtenemos los datos de la url        
        fetchData(); 
       
                
      },[]);
    //const latitude = 51.505;
    //const longitude = -0.09;
    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow 
    });
  
    return ( 
    <Row>       
        <Col md={12}>                        
            <MapContainer center={marker} zoom={10} ref={mapRef} style={{height: "50vh", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline pathOptions={{color: 'blue'}} positions={coordenadas} />   
                <Marker key={1} position={marker} icon={icon} >
            
                </Marker>
            </MapContainer>            
        </Col>
       
    </Row>
    );
}

export default MapView;