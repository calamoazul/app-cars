import { Car } from "./car";

export interface Customer {
    firstName: string,
    lastName: string,
    email: string,
    phone?: number,
    address: string,
    products?: Car[]
}
