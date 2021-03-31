import { SendCode } from "@/domain/usecase";
import { ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class SendCodeController implements Controller {
  constructor(private readonly sendCode: SendCode) {}

  async handle(request: SendCodeController.Request): Promise<HttpResponse> {
    try {
      this.sendCode.send(request.phone);
      return ok({ message: "success" });
    } catch (e) {
      console.log(e.message);
      return serverError(e);
    }
  }
}

export namespace SendCodeController {
  export type Request = {
    phone: string;
  };
}
