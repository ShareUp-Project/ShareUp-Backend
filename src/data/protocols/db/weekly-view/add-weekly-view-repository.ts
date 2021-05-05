import { AddWeeklyView } from "@/domain/usecases";

export interface AddWeeklyViewRepository {
  add: (data: AddWeeklyViewRepository.Params) => Promise<void>;
}

export namespace AddWeeklyViewRepository {
  export type Params = AddWeeklyView.Params;
}
