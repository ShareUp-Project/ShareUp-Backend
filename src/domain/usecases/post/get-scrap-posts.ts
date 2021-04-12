export interface GetScrapPosts {
  getScrap: (data: GetScrapPosts.Params) => Promise<any>;
}

export namespace GetScrapPosts {
  export type Params = {
    userId: string;
    page: number;
  };
}
