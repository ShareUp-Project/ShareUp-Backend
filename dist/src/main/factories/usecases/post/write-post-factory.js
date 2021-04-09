"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbWritePost = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const uuid_1 = require("@/infra/uuid");
exports.makeDbWritePost = () => {
    const postRepository = new db_1.PostRepository();
    const uuidAdapter = new uuid_1.UuidAdapter();
    return new usecases_1.DbWritePost(postRepository, uuidAdapter);
};
//# sourceMappingURL=write-post-factory.js.map