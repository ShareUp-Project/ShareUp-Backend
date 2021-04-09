"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicknameCheckController = void 0;
const helpers_1 = require("@/presentation/helpers");
class NicknameCheckController {
    constructor(findUser) {
        this.findUser = findUser;
    }
    async handle(request) {
        try {
            const user = await this.findUser.findOneByNickname(request.nickname);
            if (user)
                return helpers_1.alreadyExistsData();
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.NicknameCheckController = NicknameCheckController;
//# sourceMappingURL=nickname-check-controller.js.map