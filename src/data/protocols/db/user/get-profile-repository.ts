import { GetProfile } from "@/domain/usecases";

export interface GetProfileRepository {
  getProfile: (data: GetProfileRepository.Params) => Promise<GetProfileRepository.Result>;
}

export namespace GetProfileRepository {
  export type Params = GetProfile.Params;
  export type Result = GetProfile.Result;
}
