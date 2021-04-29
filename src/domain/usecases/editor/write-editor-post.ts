export interface WriteEditorPost {
  write: (data: WriteEditorPost.Params) => Promise<void>;
}

export namespace WriteEditorPost {
  export type Params = {
    title: string;
    content: string;
    image: string;
  };
}
