import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import VehicleService from '../../services/vehicleService/vehicleService';
import VehicleInterface from '../../interfaces/vehicle.interface';

interface VehicleFormModalProps {
    getVehicles: () => void;
    closeModal: () => void;
    vehicleToUpdate?: VehicleInterface;
    showModalForm: boolean
}

const VehicleFormModal: React.FC<VehicleFormModalProps> = ({ getVehicles, vehicleToUpdate, closeModal,
    showModalForm }) => {
    const [showModal, setShowModal] = useState(showModalForm);
    const [formData, setFormData] = useState<VehicleInterface>({
        plate: '',
        economic_number: '',
        vin: '',
        seats: 0,
        insurance: '',
        insurance_number: '',
        brand: '',
        model: '',
        year: 0,
        color: '',
    });

    useEffect(() => {
        if (vehicleToUpdate) {
            setFormData(vehicleToUpdate);
        }
    }, [vehicleToUpdate]);



    const handleCloseModal = () => {
        setShowModal(false);
        closeModal()

    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = async () => {
        try {
            console.log("Formulario enviado", formData);
            let isError;
            if (vehicleToUpdate) {
                isError = await VehicleService.updateVehicle(formData);
            } else {
                isError = await VehicleService.createVehicle(formData);
            }
            if (!isError) {
                handleCloseModal();
                getVehicles();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment >

            <Modal show={showModal} onHide={handleCloseModal} centered >
                <Modal.Header className='text-white bg-dark' >
                    <Modal.Title  >{vehicleToUpdate ? 'Actualizar Vehículo' : 'Crear Vehículo'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formPlaca">
                            <Form.Label>Placa</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la placa" name="plate" value={formData.plate} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumeroEconomico">
                            <Form.Label>Número Económico</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el número económico" name="economic_number" value={formData.economic_number} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formVIM">
                            <Form.Label>VIM</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el VIM" name="vin" value={formData.vin} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAsientos">
                            <Form.Label>Asientos</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Ingrese el número de asientos" name="seats" value={formData.seats.toString()} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSeguro">
                            <Form.Label>Seguro</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el seguro" name="insurance" value={formData.insurance} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSegureNumber">
                            <Form.Label>Número de Seguro</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el número de seguro" name="insurance_number" value={formData.insurance_number} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la marca" name="brand" value={formData.brand} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formModel">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el modelo" name="model" value={formData.model} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formYear">
                            <Form.Label>Año</Form.Label>
                            <Form.Control type="number" min={1900} placeholder="Ingrese el año" name="year" value={formData.year.toString()} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el color" name="color" value={formData.color} onChange={handleInputChange} required />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default VehicleFormModal;
