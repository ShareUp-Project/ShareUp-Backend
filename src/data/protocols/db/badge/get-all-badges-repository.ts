import { GetAllBadges } from "@/domain/usecases";

export interface GetAllBadgesRepository {
  getAllBadges: (data: GetAllBadgesRepository.Params) => Promise<GetAllBadgesRepository.Result>;
}

export namespace GetAllBadgesRepository {
  export type Params = GetAllBadges.Params;
  export type Result = GetAllBadges.Result;
}
