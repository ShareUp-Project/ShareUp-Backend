export interface UpgradeBadge {
  upgrade: (data: UpgradeBadge.Params) => Promise<void>;
}

export namespace UpgradeBadge {
  export type Params = {
    userId: string;
    category: string;
  };
}
