export interface GetUserPosts {
  getUserPosts: (data: GetUserPosts.Params) => any;
}

export namespace GetUserPosts {
  export type Params = {
    userId: string;
    page: number;
  };
}
