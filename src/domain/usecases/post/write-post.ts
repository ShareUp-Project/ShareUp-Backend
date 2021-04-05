import { Category } from "@/domain/entities";

export interface WritePost {
  write: (data: WritePost.Params) => Promise<string>;
}

export namespace WritePost {
  export type Params = {
    id: string;
    title: string;
    content: string;
    category: Category;
    userId: string;
  };
}
