import { DbWriteEditorPost } from "@/data/usecases";
import { WriteEditorPost } from "@/domain/usecases";
import { EditorPostRepository } from "@/infra/db";
import { UuidAdapter } from "@/infra/uuid";

export const makeDbWriteEditorPost = (): WriteEditorPost => {
  const writeEditorPostRepository = new EditorPostRepository();
  const makeId = new UuidAdapter();
  return new DbWriteEditorPost(writeEditorPostRepository, makeId);
};
