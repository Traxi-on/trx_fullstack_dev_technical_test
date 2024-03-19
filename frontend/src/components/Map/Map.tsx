import React, { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useVehicles } from "../../context/VehicleContext"; // Ajusta la ruta según tu estructura

// Definir el SVG como un string
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;

// Crear un ícono de Leaflet con el SVG
const customIcon = new L.Icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(svgIcon),
  iconSize: [35, 35], // Tamaño del icono
  iconAnchor: [17.5, 35], // Asegura que la punta del icono esté en la posición correcta
  popupAnchor: [0, -35], // Ajusta la posición del popup
});

const Map = () => {
  const { route, vehicles, selectedVehicleId, setSelectedVehicleId } =
    useVehicles();
  const initialPosition = [19.4326, -99.1332]; // Ciudad de México
  const zoom = 13;

  const defaultRouteData = { geojson: { features: [] } };
  const routeData = route ?? defaultRouteData;
  const routeCoordinates = route?.[0]?.geojson.features
    .filter((feature) => feature.geometry.type === "LineString")
    .flatMap((feature) => feature.geometry.coordinates)
    .map((coord) => [coord[1], coord[0]]);
  return (
    <div>
      <MapContainer
        center={initialPosition}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {routeCoordinates && (
          <Polyline positions={routeCoordinates} color="red" />
        )}
        {vehicles
          .filter((vehicle) => vehicle.latitud && vehicle.longitud)
          .map((vehicle, index) => (
            <Marker
              key={index}
              position={[vehicle.latitud, vehicle.longitud]}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  setSelectedVehicleId(vehicle._id);
                },
              }}
            >
              <Popup>
                {vehicle.marca} {vehicle.modelo} - {vehicle.placa}
                <br />
                Más información del vehículo aquí.
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
