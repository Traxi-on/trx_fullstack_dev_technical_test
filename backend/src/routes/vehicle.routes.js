const { Router } = require('express');
const VehicleController = require('../controllers/vehicle-controller');
const VehicleRepository = require('../repositories/vehicle-repository');

const router = Router();
const controller = new VehicleController(new VehicleRepository());

router.get('/', controller.getAllVehicles);
router.get('/search/', controller.searchVehicles);
router.get('/:id', controller.getVehicleById);
router.post('/', controller.createVehicle);
router.put('/:id', controller.updateVehicle);
router.delete('/:id', controller.deleteVehicle);

module.exports = router;
