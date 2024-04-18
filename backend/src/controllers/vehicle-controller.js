const Response = require("../schemas/response-schema");
const VehicleRepository = require('../repositories/vehicle-repository');

class VehicleController {
    constructor() {
        this.repository = new VehicleRepository();
    }

    getAllVehicles = async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const vehicles = await this.repository.getAllVehicles(page);
            return res.status(200).json(new Response(false, "List of vehicles", vehicles));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error fetching vehicles", null, error.message));
        }
    };

    getVehicleById = async (req, res) => {
        const vehicleId = req.params.id;
        try {
            const vehicle = await this.repository.getVehicleById(vehicleId);
            if (!vehicle) {
                return res.status(404).json(new Response(true, "Vehicle not found"));
            }
            return res.status(200).json(new Response(false, "Vehicle details", vehicle));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error fetching vehicle", null, error.message));
        }
    };
        searchVehicles = async (req, res) => {

        const { plate, insurance_number, model, year, brand } = req.query;
        const filters = {};
        if (plate) filters.plate = plate;
        if (insurance_number) filters.insurance_number = insurance_number;
        if (model) filters.model = modelo;
        if (year) filters.year = year;
        if (brand) filters.brand = brand;
    
        try {
            const vehicles = await this.repository.searchVehicles(filters);
            return res.status(200).json(new Response(false, "Search results", vehicles));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error searching vehicles", null, error.message));
        }
    }
    createVehicle = async (req, res) => {
        const vehicleData = req.body;
        try {
            console.log(vehicleData)
            const newVehicle = await this.repository.createVehicle(vehicleData);

            return res.status(201).json(new Response(false, "Vehicle created successfully", newVehicle));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error creating vehicle", null, error.message));
        }
    };

    updateVehicle = async (req, res) => {
        const vehicleId = req.params.id;
        const updatedVehicleData = req.body;
        try {
            const updatedVehicle = await this.repository.updateVehicle(vehicleId, updatedVehicleData);
            if (!updatedVehicle) {
                return res.status(404).json(new Response(true, "Vehicle not found"));
            }
            return res.status(200).json(new Response(false, "Vehicle updated successfully", updatedVehicle));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error updating vehicle", null, error.message));
        }
    };

    deleteVehicle = async (req, res) => {
        const vehicleId = req.params.id;
        try {
            const deletedVehicle = await this.repository.deleteVehicle(vehicleId);
            if (!deletedVehicle) {
                return res.status(404).json(new Response(true, "Vehicle not found"));
            }
            return res.status(200).json(new Response(false, "Vehicle deleted successfully", deletedVehicle));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error deleting vehicle", null, error.message));
        }
    };
}

module.exports = VehicleController;
