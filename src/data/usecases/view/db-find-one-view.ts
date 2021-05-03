import { FindOneViewRepository } from "@/data/protocols";
import { FindOneView } from "@/domain/usecases";

export class DbFindOneView implements FindOneView {
  constructor(private readonly findOneViewRepository: FindOneViewRepository) {}

  async findOne(data: FindOneView.Params): Promise<FindOneView.Result> {
    return await this.findOneViewRepository.findOne(data);
  }
}
