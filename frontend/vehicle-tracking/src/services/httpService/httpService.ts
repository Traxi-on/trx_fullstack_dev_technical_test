import { AxiosRequestConfig } from 'axios';
import { client } from '../../commons/httpCommon';
import { USE_MOCKS } from '../../constants/misc.constants';
import ApiResponse from '../../interfaces/apiResponse.interface';

export class HttpService {
  public static async get<T>(url: string, config: AxiosRequestConfig, mock: any): Promise<ApiResponse<T>> {
    if (USE_MOCKS) { return mock; }
    const response = await client.get<ApiResponse<T>>(url, config);
    return response.data; 
  }

  public static async post<T>(url: string, data: any, config: AxiosRequestConfig, mock: any): Promise<ApiResponse<T>> {
    if (USE_MOCKS) { return mock; }
    const response = await client.post<ApiResponse<T>>(url, data, config);
    return response.data; 
  }

  public static async put<T>(url: string, data: any, config: AxiosRequestConfig, mock: any): Promise<ApiResponse<T>> {
    const response = await client.put<ApiResponse<T>>(url, data, config);
    return response.data; 
  }

  public static async delete<T>(url: string,  mock: any): Promise<ApiResponse<T>> {
    const response = await client.delete<ApiResponse<T>>(url);
    return response.data; 
  }
}
