"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordController = void 0;
const helpers_1 = require("@/presentation/helpers");
class ChangePasswordController {
    constructor(findUser, changePassword) {
        this.findUser = findUser;
        this.changePassword = changePassword;
    }
    async handle(request) {
        try {
            const user = await this.findUser.findOne(request.phone);
            if (!user)
                return helpers_1.notFound();
            await this.changePassword.change(request);
            return helpers_1.ok({ message: "success" });
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.ChangePasswordController = ChangePasswordController;
//# sourceMappingURL=change-password-controller.js.map