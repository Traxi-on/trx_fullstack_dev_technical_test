import React, { useState } from "react";
import { Vehicle } from "../../types/vehicle";
import { useVehicles } from "../../context/VehicleContext";
import DeleteModal from "../Vehicle/DeleteModal";
import UpdateModal from "../Vehicle/UpdateModal"; // Importa el componente UpdateModal

type VehicleItemProps = {
  vehicle: Vehicle;
};

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  const { deleteVehicle, updateVehicle } = useVehicles();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // Estado para controlar la apertura del modal de actualización

  const handleUpdate = () => {
    setIsUpdateModalOpen(true); // Abre el modal de actualización al hacer clic en el botón "Actualizar"
  };

  const handleDelete = () => {
    deleteVehicle(vehicle._id);
  };

  const handleUpdateModalClose = () => {
    setIsUpdateModalOpen(false); // Cierra el modal de actualización
  };

  const handleUpdateConfirm = (updatedVehicle: Vehicle) => {
    //console.log(Vehicle);
    //updateVehicle(updatedVehicle); // Actualiza el vehículo con los nuevos datos
  };

  return (
    <div
      className={`shadow-md rounded-lg p-4 m-2 bg-white clr-${vehicle.color}`}
    >
      <h3 className="text-lg font-semibold">
        {vehicle.marca} {vehicle.modelo} - {vehicle.anio}
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Placa:</strong> {vehicle.placa}
        </li>
        <li>
          <strong>Asientos:</strong> {vehicle.asientos}
        </li>
        <li>
          <strong>Color:</strong> {vehicle.color}
        </li>
      </ul>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Eliminar
        </button>
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          vehicleName={`${vehicle.marca} ${vehicle.modelo}`}
        />
        <UpdateModal
          vehicle={vehicle}
          isOpen={isUpdateModalOpen}
          onClose={handleUpdateModalClose}
        />
      </div>
    </div>
  );
};

export default VehicleItem;
