import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsFillPinMapFill } from 'react-icons/bs';
import CoordinateInterface from '../../interfaces/coordinateInterface';
import VehicleInterface, { VehicleResponseInterface } from '../../interfaces/vehicle.interface';
import VehicleService from '../../services/vehicleService/vehicleService';
import VehicleFormModal from '../VehicleForm/VehicleForm';
import VehicleList from '../VehicleList/VehicleList'; 

interface NavbarProps {
    trackingRoutes: CoordinateInterface[];
}

const Navbar: React.FC<NavbarProps> = ({ trackingRoutes }) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleInterface>();
    const [page, setPage] = useState(1);
    const [loadingMoreVehicles, setloadingMoreVehicles] = useState(false);
    const [searchingVehicles, setSearchingVehicles] = useState(false);
    const [vehicles, setVehicles] = useState<VehicleResponseInterface | null>();

    useEffect(() => {
        if (!loadingMoreVehicles && !searchingVehicles) {
            getVehicles();
        }
    }, []);

    const getVehicles = async () => {
        try {
            setloadingMoreVehicles(false);
            setSearchingVehicles(false);
            const vehiclesData = await VehicleService.getVehicles(page);
            setVehicles(vehiclesData.payload);
        } catch (error) {
            console.log(error);
        }
    };

    const getMoreVehicles = async () => {
        try {
            setloadingMoreVehicles(true);
            const vehiclesData = await VehicleService.getVehicles(vehicles!.currentPage! + 1);
            vehiclesData.payload.vehicles = [...vehicles!.vehicles, ...vehiclesData.payload.vehicles]
            setVehicles(vehiclesData.payload);
        } catch (error) {
            console.log(error);
        }
    };
    const searchVehicles = async (query: Record<string, string>) => {
        try {
            setSearchingVehicles(true);
            const vehiclesData = await VehicleService.searchVehicles(query);
            setVehicles(vehiclesData.payload);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteVehicle = async (idVehicle: string) => {
        try {
            const bool = await VehicleService.deleteVehicle(idVehicle);
            if (bool) {
                getVehicles();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{ height: '8vh' }}>
    <div className="container-fluid">
        <a className="navbar-brand">Tracking App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
                {showModalUpdate && (<VehicleFormModal getVehicles={getVehicles} showModalForm={showModalUpdate} vehicleToUpdate={selectedVehicle} closeModal={() => setShowModalUpdate(false)} />)}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setShowModalCreate(!showModalCreate)}>
                                Crear Vehículo {showModalCreate}
                            </a>
                            {showModalCreate && (<VehicleFormModal getVehicles={getVehicles} showModalForm={showModalCreate} closeModal={() => setShowModalCreate(false)} />)}
                        </li>

                        <li className="nav-item">
                            <VehicleList
                                vehicles={vehicles!}
                                showModalUpdate={showModalUpdate}
                                setShowModalUpdate={setShowModalUpdate}
                                setSelectedVehicle={setSelectedVehicle}
                                deleteVehicle={deleteVehicle}
                                getMoreVehicles={getMoreVehicles}
                                searchVehicles={searchVehicles}
                                getVehicles={getVehicles}
                            />
                        </li>

                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic"  >
                                Rutas
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ maxHeight: '70vh', overflowY: 'auto' }} className='text-white bg-dark'>
                                {trackingRoutes.map((route, index) => (
                                    <Dropdown.Header key={index}>
                                        <div className="card ">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <BsFillPinMapFill className="me-2" color='red' />
                                                    Longitud: {route.lng} - Latitud {route.lat}
                                                </p>
                                            </div>
                                        </div>
                                    </Dropdown.Header>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
