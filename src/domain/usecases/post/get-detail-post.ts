export interface GetDetailPost {
  getDetail: (data: GetDetailPost.Params) => Promise<any>;
}

export namespace GetDetailPost {
  export type Params = {
    id: string;
  };
}
