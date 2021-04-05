import { DbAddHashtag } from "@/data/usecases/hashtag";
import { AddHashtag } from "@/domain/usecases";
import { HashtagRepository } from "@/infra/db";
import { UuidAdapter } from "@/infra/uuid";

export const makeDbAddHashtag = (): AddHashtag => {
  const hashtagRepository = new HashtagRepository();
  const uuidAdapter = new UuidAdapter();
  return new DbAddHashtag(hashtagRepository, uuidAdapter);
};
