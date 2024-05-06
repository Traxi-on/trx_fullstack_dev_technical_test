

import ApiResponse from "../interfaces/apiResponse.interface";
import VehicleInterface from "../interfaces/vehicle.interface";




// Mock de la respuesta de la API
const VEHICLE_RESPONSE_MOCK: ApiResponse<VehicleInterface[]> = {
  error: false,
  msg: "List of vehicles",
  payload: [
    {
      "_id": "66218bbdd76058bd2274ab09",
      "plate": "2433676568",
      "economic_number": "4026699048",
      "vin": "WAUSF78E38A691446",
      "seats": 39,
      "insurance": "Baumbach-Bernhard",
      "insurance_number": "9647531435",
      "brand": "Isuzu",
      "model": "Hombre Space",
      "year": 2000,
      "color": "Fuscia",
      "__v": 0
    },
    {
      "_id": "66218be1d76058bd2274ab0b",
      "plate": "6157184027",
      "economic_number": "7686239403",
      "vin": "1C3BC8EG8BN532515",
      "seats": 40,
      "insurance": "Considine, Hirthe and Schmitt",
      "insurance_number": "3582601633",
      "brand": "Lincoln",
      "model": "MKT",
      "year": 2012,
      "color": "Red",
      "__v": 0
    },
    {
      "_id": "66218bebd76058bd2274ab0d",
      "plate": "9341257069",
      "economic_number": "2789026386",
      "vin": "WBSWL93578P813375",
      "seats": 34,
      "insurance": "Wisoky, Hand and Ruecker",
      "insurance_number": "8239188583",
      "brand": "Acura",
      "model": "Legend",
      "year": 1990,
      "color": "Khaki",
      "__v": 0
    }
  ],
  internalError: null
};

export default VEHICLE_RESPONSE_MOCK;
