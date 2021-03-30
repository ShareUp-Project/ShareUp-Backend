import { Encrypter, FindUserRepository, HashComparer } from "@/data/protocols";
import { TokenType } from "@/data/protocols/crypto/encrypter";
import { Authentication } from "@/domain/usecase";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly findUserRepository: FindUserRepository,
    private readonly hashCompare: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth(data: Authentication.Params): Promise<Authentication.Result> {
    const user = await this.findUserRepository.findOne(data.phone);
    if (!user) return null;
    const passwordCompareResult = await this.hashCompare.compare(
      data.password,
      user.password
    );
    if (passwordCompareResult) {
      const accessToken = await this.encrypter.encrypt(
        data.phone,
        TokenType.ACCESS
      );
      const refreshToken = await this.encrypter.encrypt(
        data.phone,
        TokenType.REFRESH
      );
      return { accessToken, refreshToken };
    }
    return null;
  }
}
