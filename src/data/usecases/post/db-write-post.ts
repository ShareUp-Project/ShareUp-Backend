import { MakeId, WritePostRepository } from "@/data/protocols";
import { WritePost } from "@/domain/usecases";

export class DbWritePost implements WritePost {
  constructor(
    private readonly writePostRepository: WritePostRepository,
    private readonly makeId: MakeId
  ) {}

  async write(data: WritePost.Params): Promise<string> {
    const id: string = await this.makeId.makeId();
    await this.writePostRepository.write({ id, ...data });
    return id;
  }
}
