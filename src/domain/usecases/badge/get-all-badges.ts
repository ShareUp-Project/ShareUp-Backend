import { Badge } from "@/domain/entities";

export interface GetAllBadges {
  getAllBadges: (data: GetAllBadges.Params) => Promise<GetAllBadges.Result>;
}

export namespace GetAllBadges {
  export type Params = {
    userId: string;
  };
  export type Result = Badge;
}
