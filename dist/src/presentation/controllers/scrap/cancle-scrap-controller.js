"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancleScrapController = void 0;
const helpers_1 = require("@/presentation/helpers");
class CancleScrapController {
    constructor(cancleScrap) {
        this.cancleScrap = cancleScrap;
    }
    async handle(request) {
        const { id, identity } = request;
        try {
            await this.cancleScrap.cancle({ id, userId: identity });
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.CancleScrapController = CancleScrapController;
//# sourceMappingURL=cancle-scrap-controller.js.map