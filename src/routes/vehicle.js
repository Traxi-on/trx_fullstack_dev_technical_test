const express = require("express");
const vehicleSchema = require("../models/vehicle");
const LocationSchema = require("../models/location");

const router = express.Router();

//creater vehicle
router.post("/vehicles", (req, res) => {
  const vehicle = vehicleSchema(req.body);
  vehicle
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get all vehicles
router.get("/vehicles", (req, res) => {
  let query = {};

  for (let param in req.query) {
    query[param] = req.query[param];
  }

  vehicleSchema
    .find(query)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//get a vehicles
router.get("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  vehicleSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//update a vehicles
router.put("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  const {
    plate,
    numero_economico,
    vim,
    type,
    status,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
  } = req.body;
  vehicleSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          plate,
          numero_economico,
          vim,
          type,
          status,
          seats,
          insurance,
          insurance_number,
          brand,
          model,
          year,
          color,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//delete a vehicles
router.delete("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  vehicleSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


//get all locations
router.get("/locations", (req, res) => {

  LocationSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


//get location by vehicleId
router.get("/locations/:vehicleId", (req, res) => {
  const { vehicleId } = req.params;
  LocationSchema
    .findOne({ vehicleId: vehicleId })
    .then((data) => {
      if (data) {
        res.json(data); 
      } else {
      
        LocationSchema.aggregate([
          { $sample: { size: 1 } } 
        ])
        .then(randomData => {
          if(randomData.length) {
            res.json(randomData[0]); 
          } else {
            res.status(404).json({ message: 'No locations available.' }); 
          }
        })
        .catch(err => res.status(500).json({ message: err.message }));
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});


//post location
router.post("/locations", (req, res) => {
  const location = new LocationSchema(req.body);
  location
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
