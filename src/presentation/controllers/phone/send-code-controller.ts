import { FindUser, SendCode } from "@/domain/usecases";
import { alreadyExistsData, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class SendCodeController implements Controller {
  constructor(private readonly sendCode: SendCode, private readonly findUser: FindUser) {}

  async handle(request: SendCodeController.Request): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOne(request.phone);
      if (user) return alreadyExistsData();
      this.sendCode.send(request.phone);
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace SendCodeController {
  export type Request = {
    phone: string;
  };
}
