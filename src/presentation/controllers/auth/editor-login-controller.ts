import { EditorAuth } from "@/domain/usecases";
import { ok, serverError, unauthorized } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class EditorLoginController implements Controller {
  constructor(private readonly editorAuth: EditorAuth) {}

  async handle(data: EditorLoginController.Request): Promise<HttpResponse> {
    try {
      const response = await this.editorAuth.editorAuth(data);
      if (!response) return unauthorized();
      return ok(response);
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace EditorLoginController {
  export type Request = {
    id: string;
    password: string;
  };
}
