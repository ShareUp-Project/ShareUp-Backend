import { FindUser } from "@/domain/usecase";
import { FindUserRepository } from "../protocols";

export class DbFindUser implements FindUser {
  constructor(private readonly findUserRepository: FindUserRepository) {}

  async findOne(phone: string): Promise<FindUser.Result> {
    return await this.findUserRepository.findOne(phone);
  }
}
