export interface AddHashtag {
  add: (data: AddHashtag.Params) => Promise<void>;
}

export namespace AddHashtag {
  export type Params = {
    id: string;
    tag: string;
    postId: string;
  };
}
