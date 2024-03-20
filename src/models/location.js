const mongoose = require("mongoose");

const GeoSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point', 'LineString'],
      required: true
    },
    coordinates: {
      type: [[Number]],
      required: true
    }
  });
  
  const LocationSchema = new mongoose.Schema({
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true
    },
    currentLocation: {
      type: GeoSchema,
      required: true
    }
  });
  
  
  LocationSchema.index({ "currentLocation": "2dsphere" });

  module.exports = mongoose.model("Location", LocationSchema);
  