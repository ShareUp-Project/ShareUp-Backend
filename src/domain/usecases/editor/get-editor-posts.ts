export interface GetEditorPosts {
  getEditorPosts: (data: GetEditorPosts.Params) => Promise<any>;
}

export namespace GetEditorPosts {
  export type Params = {
    page: number;
  };
}
