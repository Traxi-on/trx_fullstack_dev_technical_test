
 interface ApiResponse<T> {
  error: boolean;
  msg: string;
  payload: T;
  internalError: any;
}

export default ApiResponse;
