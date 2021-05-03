import { FindOneView } from "@/domain/usecases";

export interface FindOneViewRepository {
  findOne: (
    data: FindOneViewRepository.Params
  ) => Promise<FindOneViewRepository.Result>;
}

export namespace FindOneViewRepository {
  export type Params = FindOneView.Params;
  export type Result = FindOneView.Result;
}
