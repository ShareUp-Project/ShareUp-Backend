import { ChangePassword, FindUser } from "@/domain/usecases";
import { notFound, ok, serverError } from "@/presentation/helpers";
import { Controller, HttpResponse } from "@/presentation/protocols";

export class ChangePasswordController implements Controller {
  constructor(private readonly findUser: FindUser, private readonly changePassword: ChangePassword) {}

  async handle(request: ChangePasswordController.Request): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOne(request.phone);
      if (!user) return notFound();
      await this.changePassword.change(request);
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace ChangePasswordController {
  export type Request = {
    phone: string;
    password: string;
  };
}
