const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    placa: { type: String, required: true, unique: true },
    numero_economico: { type: String, required: true, unique: true },
    vim: { type: String, required: true, unique: true },
    asientos: { type: Number, required: true, integer: true },
    seguro: { type: String, required: true },
    segure_number: { type: String, required: true },
    BRAND: { type: String, required: true },
    MODEL: { type: String, required: true },
    YEAR: { type: Number, required: true, integer: true },
    COLOR: { type: String, required: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
