import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {

    public cars: Car[] = []


    getCars = () => {
      return this.cars
    }
}
