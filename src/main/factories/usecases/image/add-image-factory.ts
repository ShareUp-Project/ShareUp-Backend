import { DbAddImage } from "@/data/usecases";
import { AddImage } from "@/domain/usecases";
import { ImageRepository } from "@/infra/db";
import { UuidAdapter } from "@/infra/uuid";

export const makeDbAddImage = (): AddImage => {
  const imageRepository = new ImageRepository();
  const uuidAdapter = new UuidAdapter();
  return new DbAddImage(imageRepository, uuidAdapter);
};
