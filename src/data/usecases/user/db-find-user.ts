import { FindUser } from "@/domain/usecases";
import { FindUserRepository } from "@/data/protocols";

export class DbFindUser implements FindUser {
  constructor(private readonly findUserRepository: FindUserRepository) {}

  async findOne(phone: string): Promise<FindUser.Result> {
    return await this.findUserRepository.findOne(phone);
  }
}
