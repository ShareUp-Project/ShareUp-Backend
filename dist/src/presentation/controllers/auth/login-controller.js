"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoginController {
    constructor(authentication) {
        this.authentication = authentication;
    }
    async handle(request) {
        try {
            const response = await this.authentication.auth(request);
            if (!response)
                return helpers_1.unauthorized();
            return helpers_1.ok(response);
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login-controller.js.map