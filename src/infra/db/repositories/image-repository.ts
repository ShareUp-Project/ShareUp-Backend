import { AddImageRepository } from "@/data/protocols";
import { Image } from "@/domain/entities";
import { EntityRepository, getRepository } from "typeorm";

@EntityRepository(Image)
export class ImageRepository implements AddImageRepository {
  public async add(data: AddImageRepository.Params): Promise<void> {
    await getRepository(Image)
      .createQueryBuilder("image")
      .insert()
      .into(Image)
      .values(data)
      .execute();
  }
}
