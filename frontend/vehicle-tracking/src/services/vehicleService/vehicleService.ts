import { HttpService } from '../httpService/httpService';
import ApiResponse from '../../interfaces/apiResponse.interface';
import VehicleInterface from '../../interfaces/vehicle.interface';
import VEHICLE_RESPONSE_MOCK from '../../mocks/vehicleMock';

class VehicleService {
  baseUrl = process.env.REACT_APP_API_URL;


  async getVehicles(page: number = 1): Promise<ApiResponse<VehicleInterface[]>> {
    const url = `${this.baseUrl}vehicle/?page=${page}`;
    const response = await HttpService.get<ApiResponse<VehicleInterface[]>>(url, {}, VEHICLE_RESPONSE_MOCK);

    return response as unknown as ApiResponse<VehicleInterface[]>;
  }
}

export default new VehicleService();
