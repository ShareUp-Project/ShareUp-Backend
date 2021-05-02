import { GetEditorPostsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetEditorPosts } from "@/main/factories";

export const makeGetEditorPostsController = (): Controller => {
  return new GetEditorPostsController(makeDbGetEditorPosts());
};
