import {Schema,Types,model,Model} from 'mongoose';
import { Vehicule } from '../interfaces/vehicule.interface';

const vehicleSchema = new Schema<Vehicule>({    
    placa: {
        type:String, 
        required:true
    },
    "numero economico": { 
        type:Number, 
        required:true 
    },
    vim: {
        type:String, 
        required:true
    },
    asientos: { 
        type:Number, 
        required:true 
    },
    seguro: {
        type:String, 
        required:true
    },
    "segure numebr": { 
        type:Number, 
        required:true 
    },
    BRAND: {
        type:String, 
        required:true
    },
    MODEL: {
        type:String, 
        required:true
    },
    YEAR: { 
        type:Number, 
        required:true 
    },
    COLOR: {
        type:String, 
        required:true
    },
    TYPE:{
        type:String,
        enum:["Van","Truck","Bus","SUV","Trailer"],
        required:true
    },
    STATUS: {
        type:String,
        enum:["Ready","Hold","Out"], 
        required:true
    }
},{
    timestamps:true
});
const vehicleModel = model('Vehicles',vehicleSchema);

export default vehicleModel;