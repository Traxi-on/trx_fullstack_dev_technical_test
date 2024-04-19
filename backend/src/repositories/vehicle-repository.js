const Vehicle = require('../schemas/vehicle-schema');

class VehicleRepository {

    async getAllVehicles(page = 1) {
        const limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const totalDocuments = await Vehicle.countDocuments();
        const totalPages = Math.ceil(totalDocuments / limit);

        const vehicles = await Vehicle.find().skip(startIndex).limit(limit);

        return {
            vehicles,
            totalPages,
            currentPage: page,
            totalDocuments
        };
    }

    async searchVehicles(filters) {
        const query = {};

        if (filters.plate) query.plate = filters.plate;
        if (filters.insurance_number) query.insurance_number = filters.insurance_number;
        if (filters.model) query.model = filters.model;
        if (filters.year) query.year = filters.year;
        if (filters.brand) query.brand = filters.brand;
        return await Vehicle.find(query);
    }

    async getVehicleById(vehicleId) {
        return await Vehicle.findById(vehicleId);
    }

    async createVehicle(vehicleData) {
        return await Vehicle.create(vehicleData);
    }

    async updateVehicle(vehicleId, updatedVehicleData) {
        return await Vehicle.findByIdAndUpdate(vehicleId, updatedVehicleData, { new: true });
    }

    async deleteVehicle(vehicleId) {
        return await Vehicle.findByIdAndDelete(vehicleId);
    }
}

module.exports = VehicleRepository;
