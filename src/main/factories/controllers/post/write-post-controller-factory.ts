import { WritePostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import {
  makeDbWritePost,
  makeDbAddHashtag,
  makeDbAddImage,
} from "@/main/factories";

export const makeWritePostController = (): Controller => {
  return new WritePostController(
    makeDbWritePost(),
    makeDbAddHashtag(),
    makeDbAddImage()
  );
};
