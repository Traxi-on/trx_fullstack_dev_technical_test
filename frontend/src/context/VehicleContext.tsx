import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Vehicle } from "../../src/types/vehicle";

type VehicleContextType = {
  vehicles: Vehicle[];
  selectedVehicleId: string | null;
  setSelectedVehicleId: (id: string | null) => void;
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  updateVehicles: (updatedVehicles: Vehicle[]) => void;
  deleteVehicle: (vehicleId: string) => void;
  totalPages: number; // Número total de páginas
  currentPage: number; // Página actual
  searchVehicles: (keyword: string, page: number, pageSize: number) => void; // Función para buscar vehículos
};

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [route, setRoute] = useState(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(
    null
  );
  const token =
    "eyJhbGciOiJIUzI1NiJ9.e30.LWjhAsQBfZsc8486nmm5_NuxblMktku4Yo1foc2Mlwo";
  const baseHeaders = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const fetchInitialVehicles = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/vehicles/?page=1&pageSize=10",
          {
            method: "GET",
            headers: baseHeaders,
            redirect: "follow",
          }
        );
        if (!response.ok) {
          throw new Error(`Error fetching vehicles: ${response.statusText}`);
        }
        const data = await response.json();

        setVehicles(data.vehicles);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error("Failed to fetch initial vehicles", error);
      }
    };
    const fetchRoute = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/routes/route-detail"
        );
        if (!response.ok) {
          throw new Error("Error fetching route");
        }
        const data = await response.json();
        setRoute(data);
      } catch (error) {
        console.error("Failed to fetch route", error);
      }
    };
    fetchInitialVehicles();
    fetchRoute();
  }, []);

  const searchVehicles = async (
    keyword: string,
    page: number,
    pageSize: number
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/vehicles/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      if (!response.ok) {
        throw new Error(`Error searching vehicles: ${response.statusText}`);
      }
      const data = await response.json();
      setVehicles(data.vehicles);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Failed to search vehicles", error);
    }
  };

  const deleteVehicle = async (vehicleId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/vehicles/${vehicleId}`,
        { method: "DELETE", headers: baseHeaders }
      );
      // Verifica si la eliminación fue exitosa
      if (response.status === 200) {
        // Actualiza el estado local excluyendo el vehículo eliminado
        setVehicles((prevVehicles) =>
          prevVehicles.filter((vehicle) => vehicle._id !== vehicleId)
        );
      } else if (response.status === 404) {
        console.error("Vehículo no encontrado");
      } else {
        console.error("Error al eliminar vehículo: ", response.status);
        throw new Error(`Error al eliminar vehículo: ${response.status}`);
      }
    } catch (error) {
      console.error("Error al eliminar vehículo: ", error);
    }
  };

  // Función para añadir un nuevo vehículo
  const addVehicle = async (newVehicle: Vehicle) => {
    console.log(newVehicle);
    try {
      const response = await fetch("http://localhost:3001/api/vehicles", {
        method: "POST",
        headers: baseHeaders,
        body: JSON.stringify(newVehicle),
        redirect: "follow",
      });
      // Verifica si la creación fue exitosa
      if (response.status === 201) {
        const savedVehicle = await response.json();
        // Actualiza el estado local incluyendo el nuevo vehículo
        setVehicles((prevVehicles) => [...prevVehicles, savedVehicle]);
      } else {
        console.error("Error al añadir vehículo: ", response.status);
        throw new Error(`Error al añadir vehículo: ${response.status}`);
      }
    } catch (error) {
      console.error("Error al añadir vehículo:", error);
    }
  };

  const updateVehicle = async (vehicleId, updatedVehicleData) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/vehicles/${vehicleId}`,
        {
          method: "PUT",
          headers: baseHeaders,
          body: JSON.stringify(updatedVehicleData),
        }
      );
      if (response.status === 200) {
        const updatedVehicle = await response.json();
        setVehicles((prevVehicles) =>
          prevVehicles.map((vehicle) =>
            vehicle._id === vehicleId ? updatedVehicle : vehicle
          )
        );
      } else if (response.status === 404) {
        console.error("Vehículo no encontrado");
      } else {
        throw new Error("La actualización del vehículo falló");
      }
    } catch (error) {
      console.error("Error al actualizar el vehículo:", error);
    }
  };

  return (
    <VehicleContext.Provider
      value={{
        route,
        vehicles,
        setVehicles,
        updateVehicle,
        totalPages,
        currentPage,
        searchVehicles,
        addVehicle,
        deleteVehicle,
        selectedVehicleId,
        setSelectedVehicleId,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicles = (): VehicleContextType => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error("useVehicles must be used within a VehicleProvider");
  }
  return context;
};
