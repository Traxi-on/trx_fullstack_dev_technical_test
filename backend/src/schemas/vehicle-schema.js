const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    plate: { type: String, required: true, unique: true },
    economic_number: { type: String, required: true, unique: true },
    vin: { type: String, required: true, unique: true },
    seats: { type: Number, required: true },
    insurance: { type: String, required: true },
    insurance_number: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
