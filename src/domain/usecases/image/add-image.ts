export interface AddImage {
  add: (data: AddImage.Params) => Promise<void>;
}

export namespace AddImage {
  export type Params = {
    id: string;
    postId: string;
  };
}
