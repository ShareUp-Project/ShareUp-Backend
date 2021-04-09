"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
class UnauthorizedError extends Error {
    constructor() {
        super("Unauthorized");
        this.name = "Unauthorized Error";
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized.js.map