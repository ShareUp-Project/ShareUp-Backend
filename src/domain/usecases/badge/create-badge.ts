export interface CreateBadge {
  create: (data: CreateBadge.Params) => Promise<void>;
}

export namespace CreateBadge {
  export type Params = {
    userId: string;
  };
}
