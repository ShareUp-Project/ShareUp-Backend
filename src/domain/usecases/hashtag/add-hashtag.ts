export interface AddHashtag {
  add: (data: AddHashtag.Params) => Promise<void>;
}

export namespace AddHashtag {
  export type Params = {
    tag: string;
    postId: string;
  };
}
