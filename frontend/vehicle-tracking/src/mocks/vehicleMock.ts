// Mock para ApiResponse
// interface MockApiResponse<T> {
//     error: boolean;
//     msg: string;
//     payload: T;
//     internalError: any;
//   }

import ApiResponse from "../interfaces/apiResponse.interface";
import VehicleInterface from "../interfaces/vehicle.interface";

  
//   // Mock para VehicleInterface
//   interface MockVehicleInterface {
//     _id: string;
//     placa: string;
//     numero_economico: string;
//     vim: string;
//     asientos: number;
//     seguro: string;
//     segure_number: string;
//     BRAND: string;
//     MODEL: string;
//     YEAR: number;
//     COLOR: string;
//     __v: number;
//   }
  
  // Mock de la respuesta de la API
  const VEHICLE_RESPONSE_MOCK: ApiResponse<VehicleInterface[]> = {
    error: false,
    msg: "List of vehicles",
    payload: [
      {
        "_id": "661eccc6104a4313bf33f34f",
        "placa": "4288630894",
        "numero_economico": "3835112163",
        "vim": "WAULK98K59A115022",
        "asientos": 36,
        "seguro": "Mohr, Kshlerin and Jacobs",
        "segure_number": "2059195268",
        "BRAND": "Mercedes-Benz",
        "MODEL": "600SEL",
        "YEAR": 1993,
        "COLOR": "Crimson",
        "__v": 0
      },
      {
        "_id": "661ed33c424ff97933a8e4e9",
        "placa": "2319158685",
        "numero_economico": "5167801583",
        "vim": "1G6AY5S39E0416673",
        "asientos": 8,
        "seguro": "Goodwin, Collins and Towne",
        "segure_number": "8378518485",
        "BRAND": "Chevrolet",
        "MODEL": "2500",
        "YEAR": 2021,
        "COLOR": "Black",
        "__v": 0
      }
    ],
    internalError: null
  };
  
  export default VEHICLE_RESPONSE_MOCK;
  