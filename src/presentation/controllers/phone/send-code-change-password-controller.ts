import { FindUser, SendCode } from "@/domain/usecases";
import { notFound, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class SendCodeChangePasswordController implements Controller {
  constructor(private readonly sendCode: SendCode, private readonly findUser: FindUser) {}

  async handle(request: SendCodeChangePasswordController.Request): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOne(request.phone);
      if (!user) return notFound();
      this.sendCode.send(request.phone);
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace SendCodeChangePasswordController {
  export type Request = {
    phone: string;
  };
}
