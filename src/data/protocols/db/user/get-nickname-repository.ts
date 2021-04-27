import { GetNickname } from "@/domain/usecases";

export interface GetNicknameRepository {
  getNickname: (
    data: GetNicknameRepository.Params
  ) => Promise<GetNicknameRepository.Result>;
}

export namespace GetNicknameRepository {
  export type Params = GetNickname.Params;
  export type Result = GetNickname.Result;
}
