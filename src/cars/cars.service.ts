import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), make: 'Toyota', model: 'Camry' },
    { id: uuid(), make: 'Honda', model: 'Civic' },
    { id: uuid(), make: 'Ford', model: 'Mustang' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    const cleanUpdateDto = Object.fromEntries(
      Object.entries(updateCarDto).filter(([_, value]) => value !== undefined),
    );

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...cleanUpdateDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }
}
