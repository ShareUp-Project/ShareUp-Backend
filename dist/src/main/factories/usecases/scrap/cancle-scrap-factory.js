"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCancleScrap = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
exports.makeDbCancleScrap = () => {
    const cancleScrapRepository = new db_1.ScrapRepository();
    return new usecases_1.DbCancleScrap(cancleScrapRepository);
};
//# sourceMappingURL=cancle-scrap-factory.js.map