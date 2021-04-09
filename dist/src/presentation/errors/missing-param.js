"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParamError = void 0;
class MissingParamError extends Error {
    constructor(paramName) {
        super(`Missing Param : ${paramName}`);
        this.name = "Missing Param Error";
    }
}
exports.MissingParamError = MissingParamError;
//# sourceMappingURL=missing-param.js.map