"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbGetPosts = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbGetPosts = () => {
    const postRepository = new db_1.PostRepository();
    return new usecases_1.DbGetPosts(postRepository);
};
//# sourceMappingURL=get-posts-factory.js.map