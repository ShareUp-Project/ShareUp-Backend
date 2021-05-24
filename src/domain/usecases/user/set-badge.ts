import { BadgeCategory } from "@/domain/entities";

export interface SetBadge {
  setBadge: (data: SetBadge.Params) => Promise<void>;
}

export namespace SetBadge {
  export type Params = {
    userId: string;
    category: BadgeCategory;
    level: number;
  };
}
