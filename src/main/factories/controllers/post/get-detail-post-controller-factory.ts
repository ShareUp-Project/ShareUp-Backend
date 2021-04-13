import { GetDetailPostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetDetailPost } from "@/main/factories";

export const makeGetDetailPostController = (): Controller => {
  return new GetDetailPostController(makeDbGetDetailPost());
};
