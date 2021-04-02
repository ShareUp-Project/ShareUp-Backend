import { Decrypter } from "@/data/protocols";
import { HttpResponse, Middleware } from "@/presentation/protocols";
import { forbidden, ok, unauthorized } from "@/presentation/helpers";

export class AuthMiddleware implements Middleware {
  constructor(private readonly decrypter: Decrypter) {}

  async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
    if (!request.token) return unauthorized();
    const token: string = request.token.split("Bearer ")[1];
    const { error, decoded } = await this.decrypter.decryptAccess(token);
    if (error) return forbidden(error);
    return ok({ decoded });
  }
}

export namespace AuthMiddleware {
  export type Request = {
    token: string;
  };
}
