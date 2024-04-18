import React, { useEffect, useState } from 'react';
import TrackingMap from '../../../components/TrackingMap/TrackingMap';
import VehicleInterface from '../../../interfaces/vehicle.interface';
import VehicleService from '../../../services/vehicleService/vehicleService';
import { Dropdown } from 'react-bootstrap';
import VehicleForm from '../../../components/VehicleForm/VehicleForm';
import TrackingRouteService from '../../../services/routeTrackingService/trackingRouteService';
import CoordinateInterface from '../../../interfaces/coordinateInterface';

import { BsPinAngle } from 'react-icons/bs'; // Importamos el ícono de pin de mapa

const Home: React.FC = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState<VehicleInterface[]>([]);
    const [trackingRoutes, setTrackingRoutes] = useState<CoordinateInterface[]>([]);

    useEffect(() => {
        getVehicles();
        getRoutes()
    }, []);

    const getVehicles = async () => {
        try {
            setLoading(true);
            const vehiclesData = await VehicleService.getVehicles(page);
            setVehicles(vehiclesData.payload);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    const getRoutes = async () => {
        try {
            setLoading(true);
            const trackingRoutesData = await TrackingRouteService.getRouteCoordinates();
            setTrackingRoutes(trackingRoutesData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleMenuItemClick = async (menuItem: string) => {
        if (menuItem === 'Vehiculos') {
            await getVehicles();
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '8vh' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tracking App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <VehicleForm />
                            </li>


                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    Vehiculos
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {vehicles.map((vehicle, index) => (
                                        <Dropdown.Item key={index}>
                                            <div className="card mb-1">
                                                <div className="card-body">
                                                    <p className="card-text">Placa: {vehicle.plate}</p>
                                                    <p className="card-text">Vehiculo: {vehicle.brand} - {vehicle.model} - {vehicle.year}</p>

                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>

                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    Rutas
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {trackingRoutes.map((route, index) => (
                                        <Dropdown.Item key={index}>
                                            <div className="card mb-1">

                                                <div className="card-body">

                                                    <p className="card-text">
                                                        <BsPinAngle className="me-2" />
                                                        Longitud: {route.lng} - Latitud {route.lat}</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>


                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header">
                <TrackingMap routeCoordinates={trackingRoutes} />
            </div>
        </div>
    );
}

export default Home;
