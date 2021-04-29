export interface WriteEditorPostRepository {
  write: (data: WriteEditorPostRepository.Params) => Promise<void>;
}

export namespace WriteEditorPostRepository {
  export type Params = {
    id: string;
    title: string;
    content: string;
    image: string;
  };
}
