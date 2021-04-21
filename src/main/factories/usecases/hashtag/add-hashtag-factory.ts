import { DbAddHashtag } from "@/data/usecases/hashtag";
import { AddHashtag } from "@/domain/usecases";
import { HashtagRepository } from "@/infra/db";

export const makeDbAddHashtag = (): AddHashtag => {
  const hashtagRepository = new HashtagRepository();
  return new DbAddHashtag(hashtagRepository);
};
