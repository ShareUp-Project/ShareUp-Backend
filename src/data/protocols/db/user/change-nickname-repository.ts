import { ChangeNickname } from "@/domain/usecases";

export interface ChangeNicknameRepository {
  changeNickname: (data: ChangeNicknameRepository.Params) => Promise<void>;
}

export namespace ChangeNicknameRepository {
  export type Params = ChangeNickname.Params;
}
