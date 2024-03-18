import { response } from "express";
import { Vehicule } from "../interfaces/vehicule.interface";
import vehicleModel from "../models/vehicle.model";


export const inesertVehicle=async(car: Vehicule)=>{
    const response=await vehicleModel.create(car);
    return response;
}

export const getAllVehicles=async()=>{
    const response=await vehicleModel.find();
    return response;
}

export const getOneVehicle= async(id:string)=>{
    const response=await vehicleModel.findById(id);
    return response;
}

export const serach=async(key:string)=>{
    const result=await vehicleModel.find({
        "$or":[
            {placa:{$regex: key}},
            {vim:{$regex:key}},
            {BRAND:{$regex:key}},                
            {STATUS:{$regex:key}},
            {TYPE:{$regex:key}},
        ]
    });
    return result;
}

export const updateOneVehicle=async(id:string,data:Vehicule)=>{
    const result = await vehicleModel.findByIdAndUpdate(id,{
        placa: data.placa,
        "numero economico": data["numero economico"],
        vim: data.vim,
        asientos: data.asientos,
        seguro: data.seguro,
        "segure numebr": data["segure numebr"],
        BRAND: data.BRAND,
        MODEL: data.MODEL,
        YEAR: data.YEAR,
        COLOR: data.COLOR,
        TYPE: data.TYPE,
        STATUS: data.STATUS
    });
    return result;
}

export const deleteOneVehicle=async(id:string)=>{
    const result = await vehicleModel.findByIdAndDelete(id);
    return result;
}