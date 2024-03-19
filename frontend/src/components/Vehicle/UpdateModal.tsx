import React, { useState } from "react";
import { useVehicles } from "../../context/VehicleContext"; // Ajusta la importación según tu estructura de carpetas
import Modal from "../Modal";
import VehicleForm from "../Vehicle/VehicleForm";

const UpdateModal = ({ vehicle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateVehicle } = useVehicles(); // Usando el hook para acceder a la función updateVehicle del contexto
  const [updatedVehicle, setUpdatedVehicle] = useState(vehicle);

  const handleOpen = () => {
    setIsOpen(true);
    setUpdatedVehicle(vehicle);
  };

  const handleClose = () => setIsOpen(false);

  const handleFormSubmit = async (updatedVehicleData) => {
    await updateVehicle(updatedVehicle._id, updatedVehicleData);
    handleClose(); // Cierra el modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVehicle({ ...updatedVehicle, [name]: value });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Editar
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">
                Editar Vehículo
              </h3>
            </div>
            <VehicleForm
              initialVehicle={updatedVehicle} // Pasa el vehículo a editar como prop
              onSubmit={handleFormSubmit} // Pasa la función para manejar el envío del formulario
            />
            <div className="flex justify-end p-4 border-t">
              <button
                type="button"
                onClick={handleClose}
                className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                form="vehicleForm"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Actualizar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateModal;
