export interface GetPosts {
  get: (data: GetPosts.Params) => Promise<any>;
}

export namespace GetPosts {
  export type Params = {
    page: number;
    category: string;
  };
}
