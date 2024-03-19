const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

//Other Routes
router.get("/search", vehicleController.searchVehicles);

//CRUD Vehicles
router.get("/", vehicleController.getAllVehicles);
router.get("/:id", vehicleController.getVehicleById);
router.post("/", vehicleController.createVehicle);
router.put("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

//router.post("/:id/location", vehicleController.updateVehicleLocation);
//router.get("/:id/route", vehicleController.getVehicleRoute);

module.exports = router;
