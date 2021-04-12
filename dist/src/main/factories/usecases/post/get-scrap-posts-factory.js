"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbGetScrapPosts = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbGetScrapPosts = () => {
    const getScrapPostsRepository = new db_1.PostRepository();
    return new usecases_1.DbGetScrapPosts(getScrapPostsRepository);
};
//# sourceMappingURL=get-scrap-posts-factory.js.map