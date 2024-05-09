const { Schema, model } = require('mongoose');

const carSchema = Schema(
  {
    placa: String,
    numero_economico: String,
    vim: String,
    asientos: Number,
    seguro: String,
    numero_deseguro: String,
    marca: String,
    modelo: String,
    anio: Number,
    color: String,
    latitud: Number,
    longitud: Number,
  },
  { versionKey: false }
);

//carSchema.index({ ubicacion: "2dsphere" });

module.exports = model('Car',carSchema);