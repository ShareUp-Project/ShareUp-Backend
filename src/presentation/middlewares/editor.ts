import { Decrypter } from "@/data/protocols";
import { HttpResponse, Middleware } from "@/presentation/protocols";
import {
  forbidden,
  isNotEditor,
  ok,
  unauthorized,
} from "@/presentation/helpers";
import env from "@/main/config/env";

export class EditorAuthMiddleware implements Middleware {
  constructor(private readonly decrypter: Decrypter) {}

  async handle(request: EditorAuthMiddleware.Request): Promise<HttpResponse> {
    if (!request.token) return unauthorized();
    const token: string = request.token.split("Bearer ")[1];
    const { error, decoded } = await this.decrypter.decryptAccess(token);
    if (error) return forbidden(error);
    if (decoded["identity"] !== env.editor.id) return isNotEditor();
    return ok({ decoded });
  }
}

export namespace EditorAuthMiddleware {
  export type Request = {
    token: string;
  };
}
