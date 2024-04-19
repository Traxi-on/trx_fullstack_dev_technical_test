interface VehicleInterface {
    _id?: string;
    plate: string;
    economic_number: string;
    vin: string;
    seats: number;
    insurance: string;
    insurance_number: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    __v?: number;
}

export default VehicleInterface;

export interface VehicleResponseInterface {
    vehicles: VehicleInterface[];
    totalPages: number;
    currentPage: number;
    totalDocuments: number;
}