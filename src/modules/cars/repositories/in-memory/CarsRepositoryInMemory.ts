import { Car } from "../../../accounts/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    license_plate,
    daily_rate,
    brand,
    category_id,
    fine_amount,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };

