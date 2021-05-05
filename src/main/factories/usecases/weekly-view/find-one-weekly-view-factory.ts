import { DbFindOneWeeklyView } from "@/data/usecases";
import { FindOneWeeklyView } from "@/domain/usecases";
import { WeeklyViewRepository } from "@/infra/db";

export const makeDbFindOneWeeklyView = (): FindOneWeeklyView => {
  const findOneWeeklyViewRepository = new WeeklyViewRepository();
  return new DbFindOneWeeklyView(findOneWeeklyViewRepository);
};
