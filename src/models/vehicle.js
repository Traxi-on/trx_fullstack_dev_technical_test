const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  plate: {
    type: String,
    required: true,
  },
  numero_economico: {
    type: String,
    required: true,
  },
  vim: { 
    type: String,
    required: true,
    minlength: 10,
    maxlength: 20
   
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
    min: 1,
  },
  insurance: {
    type: String,
    required: true,
  },
  insurance_number: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{4}$/.test(v) && parseInt(v, 10) >= 1900 && parseInt(v, 10) <= new Date().getFullYear();
      },
      message: props => `${props.value} no es un año válido!`
    }
  },
  color: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Vehicle', vehicleSchema);
