import { CreateBadge, CreateUser, FindUser } from "@/domain/usecases";
import { Controller, HttpResponse } from "@/presentation/protocols";
import { alreadyExistsData, ok, serverError } from "@/presentation/helpers";

export class SignUpController implements Controller {
  constructor(
    private readonly createUser: CreateUser,
    private readonly findUser: FindUser,
    private readonly createBadge: CreateBadge
  ) {}

  async handle(request: SignUpController.Request): Promise<HttpResponse> {
    try {
      const user = await this.findUser.findOne(request.phone);
      if (user) return alreadyExistsData();
      await this.createUser.create(request);
      await this.createBadge.create({ userId: request.id });
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
