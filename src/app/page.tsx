import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import Tabla from './components/Tabla';
import {VehicleProvider} from './contexts/VehicleContext'



export default async  function Home() {
  return (
    <div className="mx-2">
      <h1 className='text-center'>Información de Vehículos</h1>
      <VehicleProvider>
        <Map/>
        <Tabla/>
      </VehicleProvider>
    </div>
  );
}
