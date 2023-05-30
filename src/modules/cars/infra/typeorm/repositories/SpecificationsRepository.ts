import { Repository } from "typeorm";
import AppDataSource from "../../../../../shared/infra/typeorm";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";


class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOneBy({ name });

    return specification;
  }
}

export { SpecificationsRepository };

