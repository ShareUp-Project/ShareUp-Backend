"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbGetDetailPost = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbGetDetailPost = () => {
    const getDetailPostRepository = new db_1.PostRepository();
    return new usecases_1.DbGetDetailPost(getDetailPostRepository);
};
//# sourceMappingURL=get-detail-post-factory.js.map