import { CreateUser, FindUser } from "@/domain/usecase";
import { Controller, HttpResponse } from "@/presentation/protocols";
import { alreadyExistsData, ok, serverError } from "@/presentation/helpers";

export class SignUpController implements Controller {
  constructor(
    private readonly createUser: CreateUser,
    private readonly findUser: FindUser
  ) {}

  async handle(request: SignUpController.Request): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOne(request.phone);
      if (user) return alreadyExistsData();
      await this.createUser.create(request);
      return ok({ message: "success" });
    } catch (e) {
      return serverError(e);
    }
  }
}

export namespace SignUpController {
  export type Request = {
    id: string;
    phone: string;
    password: string;
    nickname: string;
  };
}
