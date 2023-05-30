import { Repository } from "typeorm";
import AppDataSource from "../../../../../shared/infra/typeorm";
import { ICreateCarDTO } from "../../../../cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../../cars/repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repository.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOneBy({ license_plate });

    return car;
  }
}

export { CarsRepository };
