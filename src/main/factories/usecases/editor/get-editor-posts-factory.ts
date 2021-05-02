import { DbGetEditorPosts } from "@/data/usecases";
import { GetEditorPosts } from "@/domain/usecases";
import { EditorPostRepository } from "@/infra/db";

export const makeDbGetEditorPosts = (): GetEditorPosts => {
  const getEditorPostsRepository = new EditorPostRepository();
  return new DbGetEditorPosts(getEditorPostsRepository);
};
