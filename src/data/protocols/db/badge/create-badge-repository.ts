import { CreateBadge } from "@/domain/usecases";

export interface CreateBadgeRepository {
  create: (data: CreateBadgeRepository.Params) => Promise<void>;
}

export namespace CreateBadgeRepository {
  export type Params = CreateBadge.Params;
}
