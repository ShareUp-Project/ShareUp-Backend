import { WriteEditorPostController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbWriteEditorPost } from "../../usecases";

export const makeWriteEditorPostController = (): Controller => {
  return new WriteEditorPostController(makeDbWriteEditorPost());
};
