"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const helpers_1 = require("@/presentation/helpers");
class AuthMiddleware {
    constructor(decrypter) {
        this.decrypter = decrypter;
    }
    async handle(request) {
        if (!request.token)
            return helpers_1.unauthorized();
        const token = request.token.split("Bearer ")[1];
        const { error, decoded } = await this.decrypter.decryptAccess(token);
        if (error)
            return helpers_1.forbidden(error);
        return helpers_1.ok({ decoded });
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.js.map