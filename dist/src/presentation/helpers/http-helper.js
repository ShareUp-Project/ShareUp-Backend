"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.serverError = exports.alreadyExistsData = exports.notFound = exports.forbidden = exports.unauthorized = exports.badRequest = void 0;
const errors_1 = require("@/presentation/errors");
exports.badRequest = (error) => ({
    statusCode: 400,
    body: error,
});
exports.unauthorized = () => ({
    statusCode: 401,
    body: new errors_1.UnauthorizedError(),
});
exports.forbidden = (error) => ({
    statusCode: 403,
    body: error,
});
exports.notFound = () => ({
    statusCode: 404,
    body: new errors_1.NotFound(),
});
exports.alreadyExistsData = () => ({
    statusCode: 409,
    body: new errors_1.AlreadyExistsError(),
});
exports.serverError = (error) => ({
    statusCode: 500,
    body: new errors_1.ServerError(error.stack),
});
exports.ok = (data) => ({
    statusCode: 200,
    body: data,
});
//# sourceMappingURL=http-helper.js.map