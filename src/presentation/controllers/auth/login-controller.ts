import { Authentication } from "@/domain/usecase";
import { ok, serverError, unauthorized } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class LoginController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  async handle(request: LoginController.Request): Promise<HttpResponse> {
    try {
      const response = await this.authentication.auth(request);
      if (!response) return unauthorized();
      return ok(response);
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace LoginController {
  export type Request = {
    phone: string;
    password: string;
  };
}
