import { AddImageRepository, MakeId } from "@/data/protocols";
import { AddImage } from "@/domain/usecases";

export class DbAddImage implements AddImage {
  constructor(
    private readonly addImageRepository: AddImageRepository,
    private readonly makeId: MakeId
  ) {}

  async add(data: AddImage.Params): Promise<void> {
    const id: string = await this.makeId.makeId();
    await this.addImageRepository.add({ id, ...data });
  }
}
