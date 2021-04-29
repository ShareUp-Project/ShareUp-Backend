import { adaptMiddleware } from "../adapters";
import { makeEditorAuthMiddleware } from "../factories";

export const editorCheck = adaptMiddleware(makeEditorAuthMiddleware());
