import { CreateUser } from "@/domain/usecases";
import { Hasher, MakeId } from "@/data/protocols";
import { CreateUserRepository } from "@/data/protocols/db";

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly hasher: Hasher,
    private readonly makeId: MakeId
  ) {}

  async create(data: CreateUser.Params): Promise<string> {
    const uuid = await this.makeId.makeId();
    const hashedPassword = await this.hasher.hash(data.password);
    await this.createUserRepository.create({
      ...data,
      id: uuid,
      password: hashedPassword,
    });
    return uuid;
  }
}
