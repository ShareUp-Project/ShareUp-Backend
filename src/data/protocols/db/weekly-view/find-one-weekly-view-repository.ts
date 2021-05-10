import { FindOneWeeklyView } from "@/domain/usecases";

export interface FindOneWeeklyViewRepository {
  findOne: (data: FindOneWeeklyViewRepository.Params) => Promise<FindOneWeeklyViewRepository.Result>;
}

export namespace FindOneWeeklyViewRepository {
  export type Params = FindOneWeeklyView.Params;
  export type Result = FindOneWeeklyView.Result;
}
