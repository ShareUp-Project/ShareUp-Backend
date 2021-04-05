import { DbWritePost } from "@/data/usecases";
import { WritePost } from "@/domain/usecases";
import { PostRepository } from "@/infra/db";
import { UuidAdapter } from "@/infra/uuid";

export const makeDbWritePost = (): WritePost => {
  const postRepository = new PostRepository();
  const uuidAdapter = new UuidAdapter();
  return new DbWritePost(postRepository, uuidAdapter);
};
