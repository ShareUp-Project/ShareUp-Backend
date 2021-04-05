import { AddHashtagRepository, MakeId } from "@/data/protocols";
import { AddHashtag } from "@/domain/usecases";

export class DbAddHashtag implements AddHashtag {
  constructor(
    private readonly addHashtagRepository: AddHashtagRepository,
    private readonly makeId: MakeId
  ) {}

  async add(data: AddHashtag.Params): Promise<void> {
    const id: string = await this.makeId.makeId();
    await this.addHashtagRepository.add({ id, ...data });
  }
}
