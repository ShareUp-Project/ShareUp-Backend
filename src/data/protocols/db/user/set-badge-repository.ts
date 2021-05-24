import { SetBadge } from "@/domain/usecases";

export interface SetBadgeRepository {
  setBadge: (data: SetBadgeRepository.Params) => Promise<void>;
}

export namespace SetBadgeRepository {
  export type Params = SetBadge.Params;
}
