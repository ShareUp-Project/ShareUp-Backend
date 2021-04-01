import { ChangePassword } from "@/domain/usecases";

export interface ChangePasswordRepository {
  change: (data: ChangePasswordRepository.Params) => Promise<void>;
}

export namespace ChangePasswordRepository {
  export type Params = ChangePassword.Params;
}
