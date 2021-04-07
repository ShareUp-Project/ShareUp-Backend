import { Post } from "@/domain/entities";

export interface FindPost {
  findOne: (data: FindPost.Params) => Promise<FindPost.Result>;
}

export namespace FindPost {
  export type Params = {
    id: string;
  };

  export type Result = Post;
}
