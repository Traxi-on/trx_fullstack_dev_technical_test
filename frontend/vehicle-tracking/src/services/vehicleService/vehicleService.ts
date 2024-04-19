import { HttpService } from '../httpService/httpService';
import ApiResponse from '../../interfaces/apiResponse.interface';
import VehicleInterface, { VehicleResponseInterface } from '../../interfaces/vehicle.interface';
import VEHICLE_RESPONSE_MOCK from '../../mocks/vehicleMock';

export class VehicleService {
  baseUrl = process.env.REACT_APP_API_URL;



  async getVehicles(page: number = 1): Promise<ApiResponse<VehicleResponseInterface>> {
    const url = `${this.baseUrl}vehicle/?page=${page}`;
    const response = await HttpService.get<ApiResponse<VehicleInterface[]>>(url, {}, VEHICLE_RESPONSE_MOCK);

    return response as unknown as ApiResponse<VehicleResponseInterface>;
  }

  async createVehicle(data: VehicleInterface): Promise<boolean> {
    const url = `${this.baseUrl}vehicle`;
    const response = await HttpService.post<ApiResponse<VehicleResponseInterface>>(url, data, {}, VEHICLE_RESPONSE_MOCK);

    return response.error;
  }
  async updateVehicle(data: VehicleInterface): Promise<boolean> {
    const url = `${this.baseUrl}vehicle/${data._id}`;
    const response = await HttpService.put<ApiResponse<VehicleResponseInterface>>(url, data, {}, VEHICLE_RESPONSE_MOCK);

    return response.error;
  }
  async deleteVehicle(vehicleId: string): Promise<boolean> {
    const url = `${this.baseUrl}vehicle/${vehicleId}`;
    const response = await HttpService.delete<ApiResponse<VehicleResponseInterface>>(url, null,);

    return !response.error;
  }
}

export default new VehicleService();
