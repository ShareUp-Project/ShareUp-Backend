import { AddView } from "@/domain/usecases";

export interface AddViewRepository {
  add: (data: AddViewRepository.Params) => Promise<void>;
}

export namespace AddViewRepository {
  export type Params = AddView.Params;
}
