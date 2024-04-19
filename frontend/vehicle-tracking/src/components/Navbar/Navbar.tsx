import React, { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { BsPinAngle, BsCarFrontFill, BsCaretDown, BsTrash, BsPencilSquare } from 'react-icons/bs';
import VehicleInterface, { VehicleResponseInterface } from '../../interfaces/vehicle.interface';
import CoordinateInterface from '../../interfaces/coordinateInterface';
import VehicleService from '../../services/vehicleService/vehicleService';
import VehicleFormModal from '../VehicleForm/VehicleForm';

interface NavbarProps {
    trackingRoutes: CoordinateInterface[];

}

const Navbar: React.FC<NavbarProps> = ({ trackingRoutes, }) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleInterface>();

    const [page, setPage] = useState(1);
    const [loadingMoreVehicles, setloadingMoreVehicles] = useState(false);
    const [vehicles, setVehicles] = useState<VehicleResponseInterface | null>();

    useEffect(() => {
        if (!loadingMoreVehicles) {

            getVehicles();

        }
    }, []);

    const getVehicles = async () => {
        try {
            setloadingMoreVehicles(false);
            const vehiclesData = await VehicleService.getVehicles(page);
            setVehicles(vehiclesData.payload);

        } catch (error) {
            console.log(error);
        }
    }
    const getMoreVehicles = async () => {
        try {
            setloadingMoreVehicles(true);
            const vehiclesData = await VehicleService.getVehicles(vehicles!.currentPage + 1);
            vehiclesData.payload.vehicles = [...vehicles!.vehicles, ...vehiclesData.payload.vehicles]
            setVehicles(
                vehiclesData.payload
            );
            console.log(vehicles)
        } catch (error) {
            console.log(error);
        }
    }


    const deleteVehicle = async (idVehicle: string) => {
        try {
            const bool = await VehicleService.deleteVehicle(idVehicle);
            if (bool) {
                getVehicles()
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '8vh' }}>

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

                        <Dropdown >
                            <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                Vehiculos
                            </Dropdown.Toggle>
                            {vehicles !== undefined && vehicles !== null ? (
                                <Dropdown.Menu style={{ maxHeight: '70vh', overflowY: 'auto' }} >
                                    {vehicles!.vehicles.map((vehicle, index) => (
                                        <Dropdown.Item key={index} onClick={(e) => { e.stopPropagation(); }} >
                                            <div className="card bg-light mb-1">
                                                <div className="card-body ">

                                                    <p className="card-text ">
                                                        <BsCarFrontFill className="me-2" />
                                                        {vehicle.brand} {vehicle.model}  año {vehicle.year}
                                                    </p>
                                                    <p className="card-text">Placa: {vehicle.plate}</p>
                                                    <p className="card-text">Marca: {vehicle.brand} - Modelo: {vehicle.model} - Año: {vehicle.year} </p>
                                                    <p className="card-text">Número Económico: {vehicle.economic_number}</p>
                                                    <p className="card-text">VIN: {vehicle.vin}</p>
                                                    <p className="card-text">Número de Asientos: {vehicle.seats}</p>
                                                    <p className="card-text">Seguro: {vehicle.insurance} - Número de Seguro: {vehicle.insurance_number}</p>
                                                    <p className="card-text">Color: {vehicle.color}</p>
                                                    <div className="d-flex justify-content-between">
                                                        <Button
                                                            variant="link"
                                                            className="d-flex align-items-center justify-content-center w-40 " href="#"
                                                            style={{ border: 'none', color: 'black' }}
                                                            onClick={(e) => { e.stopPropagation(); setShowModalUpdate(!showModalUpdate); setSelectedVehicle(vehicle) }}
                                                        >
                                                            <BsPencilSquare size={30} color='green' />


                                                        </Button>
                                                        <Button
                                                            variant="link"
                                                            className="d-flex align-items-center justify-content-center w-40" href="#"
                                                            style={{ border: 'none', color: 'black' }}
                                                            onClick={(e) => { e.stopPropagation(); deleteVehicle(vehicle._id!); }}
                                                        >

                                                            <BsTrash size={30} color='red' />
                                                        </Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                    <Dropdown.Item>
                                        <Button
                                            variant="link"
                                            className="d-flex align-items-center justify-content-center w-100"
                                            style={{ backgroundColor: 'rgba(220, 220, 220, 0.2)', border: 'none', color: 'black' }}
                                            onClick={(e) => { e.stopPropagation(); getMoreVehicles() }}
                                        >
                                            <BsCaretDown size={24} style={{ color: 'black' }} />
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            ) : null}
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Rutas
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                                {trackingRoutes.map((route, index) => (
                                    <Dropdown.Item key={index} onClick={(e) => { e.stopPropagation(); }} >
                                        <div className="card bg-light mb-1">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <BsPinAngle className="me-2" />
                                                    Longitud: {route.lng} - Latitud {route.lat}
                                                </p>
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
    );
}

export default Navbar;
