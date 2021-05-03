export interface AddView {
  add: (data: AddView.Params) => Promise<void>;
}

export namespace AddView {
  export type Params = {
    userId: string;
    postId: string;
  };
}
