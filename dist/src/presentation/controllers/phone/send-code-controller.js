"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCodeController = void 0;
const helpers_1 = require("@/presentation/helpers");
class SendCodeController {
    constructor(sendCode, findUser) {
        this.sendCode = sendCode;
        this.findUser = findUser;
    }
    async handle(request) {
        try {
            const user = await this.findUser.findOne(request.phone);
            if (user)
                return helpers_1.alreadyExistsData();
            this.sendCode.send(request.phone);
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.SendCodeController = SendCodeController;
//# sourceMappingURL=send-code-controller.js.map