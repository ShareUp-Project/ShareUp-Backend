import { EditorLoginController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbEditorAuth } from "@/main/factories";

export const makeEditorLoginController = (): Controller => {
  return new EditorLoginController(makeDbEditorAuth());
};
