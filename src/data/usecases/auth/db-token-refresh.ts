import { Encrypter } from "@/data/protocols";
import { TokenRefresh } from "@/domain/usecases";

export class DbTokenRefresh implements TokenRefresh {
  constructor(private readonly encrypter: Encrypter) {}

  async refresh(data: TokenRefresh.Params): Promise<TokenRefresh.Result> {
    const accessToken = await this.encrypter.encryptAccess(data.identity);
    const refreshToken = await this.encrypter.encryptRefresh(data.identity);
    return { accessToken, refreshToken };
  }
}
