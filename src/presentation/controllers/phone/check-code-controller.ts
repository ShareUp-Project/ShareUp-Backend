import { CheckCode } from "@/domain/usecases";
import { ok, serverError, unauthorized } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class CheckCodeController implements Controller {
  constructor(private readonly checkCode: CheckCode) {}

  async handle(request: CheckCodeController.Request): Promise<HttpResponse> {
    try {
      const result = this.checkCode.check(request);
      if (!result) return unauthorized();
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace CheckCodeController {
  export type Request = {
    phone: string;
    code: string;
  };
}
