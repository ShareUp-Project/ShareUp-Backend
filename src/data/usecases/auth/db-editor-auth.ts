import { Encrypter } from "@/data/protocols";
import { EditorAuth } from "@/domain/usecases";
import env from "@/main/config/env";

export class DbEditorAuth implements EditorAuth {
  constructor(private readonly encrypter: Encrypter) {}

  async editorAuth(data: EditorAuth.Params): Promise<EditorAuth.Result> {
    if (env.editor.id === data.id && env.editor.password === data.password) {
      return { accessToken: await this.encrypter.encryptEditor(data.id) };
    }
    return null;
  }
}
