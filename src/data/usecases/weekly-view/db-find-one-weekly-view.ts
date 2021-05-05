import { FindOneWeeklyViewRepository } from "@/data/protocols";
import { FindOneWeeklyView } from "@/domain/usecases";

export class DbFindOneWeeklyView implements FindOneWeeklyView {
  constructor(
    private readonly findOneWeeklyViewRepository: FindOneWeeklyViewRepository
  ) {}

  async findOne(
    data: FindOneWeeklyView.Params
  ): Promise<FindOneWeeklyView.Result> {
    return await this.findOneWeeklyViewRepository.findOne(data);
  }
}
