import { WeeklyView } from "@/domain/entities";

export interface FindOneWeeklyView {
  findOne: (
    data: FindOneWeeklyView.Params
  ) => Promise<FindOneWeeklyView.Result>;
}

export namespace FindOneWeeklyView {
  export type Params = {
    userId: string;
    postId: string;
  };
  export type Result = WeeklyView;
}
