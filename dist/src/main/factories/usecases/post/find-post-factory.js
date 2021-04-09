"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbFindPost = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbFindPost = () => {
    const postRepository = new db_1.PostRepository();
    return new usecases_1.DbFindPost(postRepository);
};
//# sourceMappingURL=find-post-factory.js.map