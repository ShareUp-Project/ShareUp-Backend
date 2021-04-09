"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeletePost = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbDeletePost = () => {
    const postRepository = new db_1.PostRepository();
    return new usecases_1.DbDeletePost(postRepository);
};
//# sourceMappingURL=delete-post-factory.js.map