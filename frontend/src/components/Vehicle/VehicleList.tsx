import React from 'react';
import { useVehicles } from '../../context/VehicleContext'; // Asegúrate de que la ruta de importación es correcta
import VehicleItem from '../Vehicle/VehicleItem';
import './VehicleList.css';

const VehicleList = () => {
  const { vehicles } = useVehicles();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Listado de Vehículos</h2>
      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <VehicleItem key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay vehículos disponibles.</p>
      )}
    </div>
  );
};

export default VehicleList;
