import { BadgeCategory } from "@/domain/entities";

export interface GetProfile {
  getProfile: (data: GetProfile.Params) => Promise<GetProfile.Result>;
}

export namespace GetProfile {
  export type Params = {
    userId: string;
  };

  export type Result = {
    nickname: string;
    badgeCategory: BadgeCategory;
    badgeLevel: number;
  };
}
