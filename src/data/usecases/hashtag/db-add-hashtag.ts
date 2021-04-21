import { AddHashtagRepository, MakeId } from "@/data/protocols";
import { AddHashtag } from "@/domain/usecases";

export class DbAddHashtag implements AddHashtag {
  constructor(private readonly addHashtagRepository: AddHashtagRepository) {}

  async add(data: AddHashtag.Params): Promise<void> {
    await this.addHashtagRepository.add({ ...data });
  }
}
