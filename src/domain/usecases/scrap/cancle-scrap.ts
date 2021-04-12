export interface CancleScrap {
  cancle: (data: CancleScrap.Params) => Promise<void>;
}

export namespace CancleScrap {
  export type Params = {
    id: string;
    userId: string;
  };
}
