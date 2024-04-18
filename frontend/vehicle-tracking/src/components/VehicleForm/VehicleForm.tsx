import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPlus   } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";

const CreateVehicleModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        placa: '',
        numero_economico: '',
        vim: '',
        asientos: 0,
        seguro: '',
        segure_number: '',
        BRAND: '',
        MODEL: '',
        YEAR: 0,
        COLOR: ''
    });

    const handleCreateVehicleClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes realizar validaciones adicionales según tus necesidades

        // Lógica para enviar el formulario
        console.log("Formulario enviado", formData);
        // Cerrar el modal después de enviar el formulario
        handleCloseModal();
    }

    return (
        <>
             <a className="nav-link" onClick={handleCreateVehicleClick}>
                Crear Vehiculo
            </a>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Vehículo</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formPlaca">
                            <Form.Label>Placa</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la placa" name="placa" value={formData.placa} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNumeroEconomico">
                            <Form.Label>Número Económico</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el número económico" name="numero_economico" value={formData.numero_economico} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formVIM">
                            <Form.Label>VIM</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el VIM" name="vim" value={formData.vim} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAsientos">
                            <Form.Label>Asientos</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el número de asientos" name="asientos" value={formData.asientos.toString()} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSeguro">
                            <Form.Label>Seguro</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el seguro" name="seguro" value={formData.seguro} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSegureNumber">
                            <Form.Label>Número de Seguro</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el número de seguro" name="segure_number" value={formData.segure_number} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la marca" name="BRAND" value={formData.BRAND} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formModel">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el modelo" name="MODEL" value={formData.MODEL} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formYear">
                            <Form.Label>Año</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el año" name="YEAR" value={formData.YEAR.toString()} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el color" name="COLOR" value={formData.COLOR} onChange={handleInputChange} required />
                        </Form.Group>
                        {/* Agrega más campos de formulario según sea necesario */}
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateVehicleModal;
