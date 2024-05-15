'use client'
import React, { useEffect, useState } from 'react';

const VehicleContext = React.createContext();
const VehicleProvider = ({ children }) => {
  const [vehiculoSeleccionado, setVehiculo] = useState(null);
 
  return (
    <VehicleContext.Provider
      value={{
        vehiculoSeleccionado,
        setVehiculo,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};



export { VehicleContext, VehicleProvider };
