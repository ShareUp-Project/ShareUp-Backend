"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCodeController = void 0;
const helpers_1 = require("@/presentation/helpers");
class CheckCodeController {
    constructor(checkCode) {
        this.checkCode = checkCode;
    }
    async handle(request) {
        try {
            const result = await this.checkCode.check(request);
            if (!result)
                return helpers_1.unauthorized();
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.CheckCodeController = CheckCodeController;
//# sourceMappingURL=check-code-controller.js.map