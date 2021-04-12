"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCancleScrap = void 0;
class DbCancleScrap {
    constructor(cancleScrapRepository) {
        this.cancleScrapRepository = cancleScrapRepository;
    }
    async cancle(data) {
        await this.cancleScrapRepository.cancle(data);
    }
}
exports.DbCancleScrap = DbCancleScrap;
//# sourceMappingURL=db-cancle-scrap.js.map