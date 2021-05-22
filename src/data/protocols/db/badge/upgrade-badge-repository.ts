import { UpgradeBadge } from "@/domain/usecases";

export interface UpgradeBadgeRepository {
  upgrade: (data: UpgradeBadge.Params) => Promise<void>;
}

export namespace UpgradeBadgeRepository {
  export type Params = UpgradeBadge.Params;
}
