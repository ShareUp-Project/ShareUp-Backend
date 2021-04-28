export interface EditorAuth {
  editorAuth: (data: EditorAuth.Params) => Promise<EditorAuth.Result>;
}

export namespace EditorAuth {
  export type Params = {
    id: string;
    password: string;
  };

  export type Result = {
    accessToken: string;
  };
}
