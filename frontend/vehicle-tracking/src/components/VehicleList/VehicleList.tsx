import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import { BsCarFrontFill, BsTrash, BsPencilSquare, BsCaretDown, BsSearch } from 'react-icons/bs';
import VehicleInterface, { VehicleResponseInterface } from '../../interfaces/vehicle.interface';

interface VehicleListProps {
    vehicles: VehicleResponseInterface | null;
    showModalUpdate: boolean;
    setSelectedVehicle: (vehicle: VehicleInterface | undefined) => void;
    deleteVehicle: (idVehicle: string) => void;
    setShowModalUpdate: (value: boolean) => void;
    getMoreVehicles: () => void;
    getVehicles: () => void;
    searchVehicles: (query: Record<string, string>) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles, showModalUpdate, setShowModalUpdate, setSelectedVehicle, deleteVehicle, getVehicles, getMoreVehicles, searchVehicles }) => {

    const [searchField, setSearchField] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const clear = async () => {
        setSearchField('');
        setSelectedField('');
        getVehicles();
    };
    return (

        <Dropdown autoClose={!showModalUpdate}>

            <Dropdown.Toggle variant="dark" id="dropdown-basic" >
                Vehiculos
            </Dropdown.Toggle>

            {vehicles !== undefined && vehicles !== null ? (

                <Dropdown.Menu style={{ maxHeight: '70vh', minHeight: '70vh', overflowY: 'auto', padding: 0, minWidth: '50vh' }} className='bg-dark'  >
                    <Dropdown.Header className='bg-light mb-2' >
                        <Form onSubmit={() => searchVehicles({ [selectedField]: searchField })}>
                            <h3>Buscador</h3>
                            <Row >
                                <Col xs={5}>
                                    <FormControl
                                        type="text"
                                        className="mr-sm-2"
                                        value={searchField}
                                        placeholder='buscar'
                                        onChange={(e) => setSearchField(e.target.value)} required
                                    />                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" controlId="formSearch">
                                        <Form.Control
                                            as="select"

                                            value={selectedField}
                                            onChange={(e) => setSelectedField(e.target.value)} required

                                        >
                                            <option value="" >Buscar por</option>
                                            <option value="plate">Placa</option>
                                            <option value="insurance_number">Número de Seguro</option>
                                            <option value="model">Modelo</option>
                                            <option value="year">Año</option>
                                            <option value="brand">Marca</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={2}  >
                                    <Button style={{ marginRight: 10 }} variant="outline-primary" type="submit"><BsSearch /></Button >

                                    <Button variant="outline-primary" onClick={clear}><BsTrash /></Button>
                                </Col>

                            </Row>
                        </Form>



                    </Dropdown.Header>

                    {

                        vehicles.vehicles.length !== 0 ? (
                            <React.Fragment>
                                {vehicles?.vehicles.map((vehicle, index) => (

                                    <Dropdown.Header key={index} onClick={(e) => { e.stopPropagation(); }}   >
                                        <Accordion style={{ width: '50vh', }}  >
                                            <Accordion.Item eventKey="0" >
                                                <Accordion.Header  ><p className="card-text  ">
                                                    <BsCarFrontFill className="me-2" />
                                                    {vehicle.brand} {vehicle.model}  año {vehicle.year}
                                                </p></Accordion.Header>
                                                <Accordion.Body >
                                                    <div className="card bg-light mb-1">
                                                        <div className="card-body ">


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
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>

                                    </Dropdown.Header>
                                ))}
                                {vehicles.currentPage !== vehicles.totalPages && (<Dropdown.Item className='bg-dark' >
                                    <Button
                                        variant="link"
                                        className="d-flex align-items-center justify-content-center w-100 "
                                        style={{ backgroundColor: 'rgba(220, 220, 220, 0.8)', transition: 'all 0.3s ease' }}
                                        onClick={(e) => { e.stopPropagation(); getMoreVehicles() }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(220, 220, 220, 1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(220, 220, 220, 0.8)';
                                        }}
                                    >
                                        <BsCaretDown size={24} style={{ color: 'black' }} />
                                    </Button>

                                </Dropdown.Item>)}
                            </React.Fragment>


                        ) : <Card>
                            <Card.Body>No se encontrarón resultados</Card.Body>
                        </Card>}
                </Dropdown.Menu>
            ) : null}
        </Dropdown>
    );
}

export default VehicleList;
