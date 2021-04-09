"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshMiddleware = void 0;
const helpers_1 = require("@/presentation/helpers");
class RefreshMiddleware {
    constructor(decrypter) {
        this.decrypter = decrypter;
    }
    async handle(request) {
        if (!request.token)
            return helpers_1.unauthorized();
        const token = request.token.split("Bearer ")[1];
        const { error, decoded } = await this.decrypter.decryptRefresh(token);
        if (error)
            return helpers_1.forbidden(error);
        return helpers_1.ok({ decoded });
    }
}
exports.RefreshMiddleware = RefreshMiddleware;
//# sourceMappingURL=refresh.js.map