export interface SearchTagPosts {
  searchPosts: (data: SearchTagPosts.Params) => any;
}

export namespace SearchTagPosts {
  export type Params = {
    word: string;
    page: number;
  };
}
