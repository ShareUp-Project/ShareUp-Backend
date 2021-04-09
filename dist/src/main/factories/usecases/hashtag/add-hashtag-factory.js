"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddHashtag = void 0;
const hashtag_1 = require("@/data/usecases/hashtag");
const db_1 = require("@/infra/db");
const uuid_1 = require("@/infra/uuid");
exports.makeDbAddHashtag = () => {
    const hashtagRepository = new db_1.HashtagRepository();
    const uuidAdapter = new uuid_1.UuidAdapter();
    return new hashtag_1.DbAddHashtag(hashtagRepository, uuidAdapter);
};
//# sourceMappingURL=add-hashtag-factory.js.map