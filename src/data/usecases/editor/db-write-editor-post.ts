import { MakeId, WriteEditorPostRepository } from "@/data/protocols";
import { WriteEditorPost } from "@/domain/usecases";

export class DbWriteEditorPost implements WriteEditorPost {
  constructor(
    private readonly writeEditorPostRepository: WriteEditorPostRepository,
    private readonly makeId: MakeId
  ) {}

  async write(data: WriteEditorPost.Params): Promise<void> {
    const id: string = await this.makeId.makeId();
    await this.writeEditorPostRepository.write({ id, ...data });
  }
}
