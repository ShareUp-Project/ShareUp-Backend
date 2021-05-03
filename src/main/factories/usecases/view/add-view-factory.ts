import { DbAddView } from "@/data/usecases";
import { AddView } from "@/domain/usecases";
import { ViewRepository } from "@/infra/db";

export const makeDbAddView = (): AddView => {
  const addViewRepository = new ViewRepository();
  return new DbAddView(addViewRepository);
};
