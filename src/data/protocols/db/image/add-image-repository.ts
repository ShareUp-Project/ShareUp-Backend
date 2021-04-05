import { AddImage } from "@/domain/usecases";

export interface AddImageRepository {
  add: (data: AddImageRepository.Params) => Promise<void>;
}

export namespace AddImageRepository {
  export type Params = AddImage.Params;
}
