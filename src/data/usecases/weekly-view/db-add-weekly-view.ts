import { AddWeeklyViewRepository } from "@/data/protocols";
import { AddWeeklyView } from "@/domain/usecases";

export class DbAddWeeklyView implements AddWeeklyView {
  constructor(
    private readonly addWeeklyViewRepository: AddWeeklyViewRepository
  ) {}

  async add(data: AddWeeklyView.Params): Promise<void> {
    await this.addWeeklyViewRepository.add(data);
  }
}
