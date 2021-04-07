import { DeletePostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbDeletePost, makeDbFindPost } from "@/main/factories";

export const makeDeletePostController = (): Controller => {
  return new DeletePostController(makeDbDeletePost(), makeDbFindPost());
};
