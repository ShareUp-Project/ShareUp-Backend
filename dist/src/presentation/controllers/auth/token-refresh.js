"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRefreshController = void 0;
const helpers_1 = require("@/presentation/helpers");
class TokenRefreshController {
    constructor(tokenRefresh) {
        this.tokenRefresh = tokenRefresh;
    }
    async handle(request) {
        try {
            const tokens = await this.tokenRefresh.refresh(request);
            return helpers_1.ok(tokens);
        }
        catch (e) {
            return helpers_1.serverError(e);
        }
    }
}
exports.TokenRefreshController = TokenRefreshController;
//# sourceMappingURL=token-refresh.js.map