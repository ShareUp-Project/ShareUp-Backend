import { Category } from "@/domain/entities";

export interface GetAllUserPosts {
  getAllUserPosts: (data: GetAllUserPosts.Params) => Promise<any>;
}

export namespace GetAllUserPosts {
  export type Params = {
    userId: string;
    category: Category;
  };
}
