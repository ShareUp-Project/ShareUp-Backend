export interface ScrapPost {
  scrap: (data: ScrapPost.Params) => Promise<void>;
}

export namespace ScrapPost {
  export type Params = {
    postId: string;
    userId: string;
  };
}
