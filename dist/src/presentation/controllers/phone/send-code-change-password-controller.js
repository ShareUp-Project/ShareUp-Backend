"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCodeChangePasswordController = void 0;
const helpers_1 = require("@/presentation/helpers");
class SendCodeChangePasswordController {
    constructor(sendCode, findUser) {
        this.sendCode = sendCode;
        this.findUser = findUser;
    }
    async handle(request) {
        try {
            const user = await this.findUser.findOne(request.phone);
            if (!user)
                return helpers_1.notFound();
            this.sendCode.send(request.phone);
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.SendCodeChangePasswordController = SendCodeChangePasswordController;
//# sourceMappingURL=send-code-change-password-controller.js.map