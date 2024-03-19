const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    placa: { type: String, required: true, unique: true },
    numeroEconomico: { type: String, required: true },
    vin: { type: String, required: true, unique: true },
    asientos: { type: Number, required: true },
    seguro: { type: String, required: true },
    numeroSeguro: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

// Definir índice
vehicleSchema.index(
  { placa: 1, numeroEconomico: 1, marca: 1, modelo: 1 },
  { name: "search_index" }
);

module.exports = mongoose.model("Vehicle", vehicleSchema, "vehicles");
