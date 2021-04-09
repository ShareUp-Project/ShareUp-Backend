"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbScrapPost = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbScrapPost = () => {
    const scrapPostRepository = new db_1.ScrapRepository();
    return new usecases_1.DbScrapPost(scrapPostRepository);
};
//# sourceMappingURL=scrap-post-factory.js.map