import { ChangePasswordRepository, Hasher } from "@/data/protocols";
import { ChangePassword } from "@/domain/usecases";

export class DbChangePassword implements ChangePassword {
  constructor(private readonly changePasswordRepository: ChangePasswordRepository, private readonly hasher: Hasher) {}

  async change(data: ChangePassword.Params): Promise<void> {
    const hashedPassword = await this.hasher.hash(data.password);
    await this.changePasswordRepository.change({
      ...data,
      password: hashedPassword,
    });
  }
}
