export interface DeletePost {
  delete: (data: DeletePost.Params) => Promise<void>;
}

export namespace DeletePost {
  export type Params = {
    id: string;
    userId: string;
  };
}
