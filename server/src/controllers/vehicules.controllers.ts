import { Response, Request } from "express";
import vehicleModel from "../models/vehicle.model";
import { Vehicule } from "../interfaces/vehicule.interface";
import handleHttp from "../utils/error.handler";
import { inesertVehicle, getAllVehicles, getOneVehicle, serach,updateOneVehicle, deleteOneVehicle } from "../services/vehicle.service";

//create data
export const createVehicle = async(req:Request, res:Response)=>{
    try{        
        const r = await inesertVehicle(req.body)
        res.status(200).json({message: "Datos Guardados"});
    }catch(e){
        console.log(e);
        handleHttp(res,'ERROR_CREATE_DATA',500);
    }
};

//get all data
export const getVehicles = async(req:Request, res:Response)=>{
    try{
        const result= await getAllVehicles();
        res.status(200).json(result);
    }catch(e){
        handleHttp(res,'ERROR_GET_ALL_DATA',500);      
    }
    
};

//get only one
export const getVehicle = async(req:Request, res:Response)=>{
    try{
        const result = await getOneVehicle(req.params.id);
        if(result===null)
            handleHttp(res,'No se encontraro datos',404);
        else
            res.status(200).json(result)
    }catch(e){
        handleHttp(res,'ERROR_GET_DATA',500);        
    }
    
};

//search function
export const searchVehicle=async(req:Request,res:Response)=>{
    try{
        const result= await serach(req.params.key);
        if(result.length===0)
            handleHttp(res,'No se encontraro datos',404);
        else
            res.status(200).json(result)
    }catch(e){
        handleHttp(res,'ERROR_SEARCH_DATA',500);

    }
}

//update Vehicule
export const updateVehicle = async(req:Request, res:Response)=>{    
    try{
        const result=await updateOneVehicle(req.params.id,req.body)
        if(result===null)
            handleHttp(res,'No se encontro dato para ser actualizado',404);
        else            
            res.status(200).json({message: "Datos actualizados"});
    }catch(e){
        handleHttp(res,'ERROR_UPDATE_DATA',500);
    }
};


//delte Vehicule
export const deleteVehicle = async(req:Request, res:Response)=>{
    try{
        const result = await deleteOneVehicle(req.params.id);
        if(result===null)
            handleHttp(res,'No se encontro dato para ser eliminado',404);
        else            
            res.status(200).json({message: "Datos eliminados"});
    }catch(e){
        handleHttp(res,'ERROR_DELETE_DATA',500);        
    }
};