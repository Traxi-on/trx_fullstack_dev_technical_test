import { createContext, useContext, useState } from "react";

export const VehicleContext=createContext();

export const useVehicle = () =>{
    const context = useContext(VehicleContext);
    if(!context){
        throw new Error("useVehicle must be used within a VehicleContextProvider")
    }
    return context;
}

export const VehicleContextProvider=({children})=>{
    
    const [marker, setMarker]=useState([19.432635, -99.133036]);

    return(
        <VehicleContext.Provider value={{marker: marker, setMarker: setMarker}}>
            {children}
        </VehicleContext.Provider>
    );
}
