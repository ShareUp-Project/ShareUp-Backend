import { DbFindOneView } from "@/data/usecases";
import { FindOneView } from "@/domain/usecases";
import { ViewRepository } from "@/infra/db";

export const makeDbFindOneView = (): FindOneView => {
  const findOneViewRepository = new ViewRepository();
  return new DbFindOneView(findOneViewRepository);
};
