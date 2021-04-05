import { AddHashtag } from "@/domain/usecases";

export interface AddHashtagRepository {
  add: (data: AddHashtagRepository.Params) => Promise<void>;
}

export namespace AddHashtagRepository {
  export type Params = AddHashtag.Params;
}
