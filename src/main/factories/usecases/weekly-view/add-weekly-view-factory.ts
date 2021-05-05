import { DbAddWeeklyView } from "@/data/usecases";
import { AddWeeklyView } from "@/domain/usecases";
import { WeeklyViewRepository } from "@/infra/db";

export const makeDbAddWeeklyView = (): AddWeeklyView => {
  const addWeeklyViewRepository = new WeeklyViewRepository();
  return new DbAddWeeklyView(addWeeklyViewRepository);
};
