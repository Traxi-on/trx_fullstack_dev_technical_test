import React, { useEffect, useState } from 'react';
import TrackingMap from '../../../components/TrackingMap/TrackingMap';
import VehicleInterface from '../../../interfaces/vehicle.interface';
import VehicleService from '../../../services/vehicleService/vehicleService';
import { Dropdown } from 'react-bootstrap';
import VehicleForm from '../../../components/VehicleForm/VehicleForm';

const Home: React.FC = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [vehicles, setVehicles] = useState<VehicleInterface[]>([]);

    useEffect(() => {
        getVehicles();
    }, []);

    const getVehicles = async () => {
        try {
            setLoading(true);
            const vehiclesData = await VehicleService.getVehicles(page);
            setVehicles(vehiclesData.payload);
        } catch (error) {
            console.log(error);
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
                                                    <p className="card-text">Placa: {vehicle.placa}</p>
                                                    <p className="card-text">Vehiculo: {vehicle.BRAND} - {vehicle.MODEL} - {vehicle.YEAR}</p>

                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleMenuItemClick('Rutas')}>Rutas</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header">
                <TrackingMap />
            </div>
        </div>
    );
}

export default Home;
