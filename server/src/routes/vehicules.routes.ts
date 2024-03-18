import { Router, Request, Response } from "express";
import { 
        createVehicle,
        getVehicles,
        getVehicle,
        updateVehicle,
        deleteVehicle,
        searchVehicle
} from '../controllers/vehicules.controllers';


const router = Router();

//Create vehicle
router.post('/', createVehicle);

//get all vehicles
router.get('/', getVehicles);

//detail vehicle
router.get('/:id', getVehicle);

//serach vehicle
router.get('/search/:key', searchVehicle);

//Update vehicle
router.put('/:id', updateVehicle);

//delete vehicle
router.delete('/:id', deleteVehicle);


export default router;