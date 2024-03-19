import React, { useState, useEffect } from "react";
import { Vehicle } from "../../types/vehicle";

type VehicleFormProps = {
  initialVehicle?: Vehicle;
  onSubmit: (vehicle: Vehicle) => void;
};

const VehicleForm: React.FC<VehicleFormProps> = ({
  initialVehicle,
  onSubmit,
}) => {
  const [vehicle, setVehicle] = useState<Vehicle>({
    _id: "",
    placa: "",
    numeroEconomico: "",
    vin: "",
    asientos: 0,
    seguro: "",
    numeroSeguro: "",
    marca: "",
    modelo: "",
    anio: 1990,
    color: "",
  });

  useEffect(() => {
    if (initialVehicle) {
      setVehicle(initialVehicle);
    }
  }, [initialVehicle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(vehicle);
  };

  return (
    <form id="vehicleForm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna 1 */}
        <div>
          <div>
            <label
              htmlFor="placa"
              className="block text-sm font-medium text-gray-700"
            >
              Placa
            </label>
            <input
              type="text"
              name="placa"
              id="placa"
              value={vehicle.placa}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="numeroEconomico"
              className="block text-sm font-medium text-gray-700"
            >
              Número Económico
            </label>
            <input
              type="text"
              name="numeroEconomico"
              id="numeroEconomico"
              value={vehicle.numeroEconomico}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="vin"
              className="block text-sm font-medium text-gray-700"
            >
              VIN
            </label>
            <input
              type="text"
              name="vin"
              id="vin"
              value={vehicle.vin}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="asientos"
              className="block text-sm font-medium text-gray-700"
            >
              Asientos
            </label>
            <input
              type="number"
              name="asientos"
              id="asientos"
              value={vehicle.asientos}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <div>
            <label
              htmlFor="seguro"
              className="block text-sm font-medium text-gray-700"
            >
              Seguro
            </label>
            <input
              type="text"
              name="seguro"
              id="seguro"
              value={vehicle.seguro}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="numeroSeguro"
              className="block text-sm font-medium text-gray-700"
            >
              Número de Seguro
            </label>
            <input
              type="text"
              name="numeroSeguro"
              id="numeroSeguro"
              value={vehicle.numeroSeguro}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="marca"
              className="block text-sm font-medium text-gray-700"
            >
              Marca
            </label>
            <input
              type="text"
              name="marca"
              id="marca"
              value={vehicle.marca}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="modelo"
              className="block text-sm font-medium text-gray-700"
            >
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              id="modelo"
              value={vehicle.modelo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="anio"
              className="block text-sm font-medium text-gray-700"
            >
              Año
            </label>
            <input
              type="number"
              name="anio"
              id="anio"
              value={vehicle.anio}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              min="1900"
              max="2099"
              step="1"
            />
          </div>
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700"
            >
              Color
            </label>

            <input
              type="text"
              name="color"
              id="color"
              value={vehicle.color}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default VehicleForm;
