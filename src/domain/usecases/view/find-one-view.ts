import { View } from "@/domain/entities";

export interface FindOneView {
  findOne: (data: FindOneView.Params) => Promise<FindOneView.Result>;
}

export namespace FindOneView {
  export type Params = {
    userId: string;
    postId: string;
  };
  export type Result = View;
}
