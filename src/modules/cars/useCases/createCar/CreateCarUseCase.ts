import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    brand,
    category_id,
    license_plate,
    fine_amount,
  }: IRequest): Promise<void> {
    this.carsRepository.create({
      name,
      description,
      daily_rate,
      brand,
      category_id,
      license_plate,
      fine_amount,
    });
  }
}

export { CreateCarUseCase };

