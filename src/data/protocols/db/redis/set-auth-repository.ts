import { SetAuth } from "@/domain/usecase";

export interface SetAuthRepository {
  setAuthCode: (data: SetAuthRepository.Params) => void;
}

export namespace SetAuthRepository {
  export type Params = SetAuth.Params;
}
