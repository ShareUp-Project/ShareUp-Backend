import { CreateUser } from "@/domain/usecase";
import { Hasher } from "../protocols";
import { CreateUserRepository } from "../protocols/db/user";

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly hasher: Hasher,
    private readonly createUserRepository: CreateUserRepository
  ) {}

  async create(data: CreateUser.Params): Promise<void> {
    const hashedPassword = await this.hasher.hash(data.password);
    await this.createUserRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
