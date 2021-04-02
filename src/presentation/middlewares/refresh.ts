import { Decrypter } from "@/data/protocols";
import { HttpResponse, Middleware } from "@/presentation/protocols";
import { forbidden, ok, unauthorized } from "@/presentation/helpers";

export class RefreshMiddleware implements Middleware {
  constructor(private readonly decrypter: Decrypter) {}

  async handle(request: RefreshMiddleware.Request): Promise<HttpResponse> {
    if (!request.token) return unauthorized();
    const token: string = request.token.split("Bearer ")[1];
    const { e, decoded } = await this.decrypter.decryptRefresh(token);
    if (e) return forbidden(e);
    return ok({ decoded });
  }
}

export namespace RefreshMiddleware {
  export type Request = {
    token: string;
  };
}
