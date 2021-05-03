import { AddViewRepository } from "@/data/protocols";
import { AddView } from "@/domain/usecases";

export class DbAddView implements AddView {
  constructor(private readonly addViewRepository: AddViewRepository) {}

  async add(data: AddView.Params): Promise<void> {
    await this.addViewRepository.add(data);
  }
}
