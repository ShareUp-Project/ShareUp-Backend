"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = exports.Parameters = void 0;
var Parameters;
(function (Parameters) {
    Parameters["BODY"] = "body";
    Parameters["PARAM"] = "params";
    Parameters["QUERY"] = "query";
    Parameters["HEADER"] = "headers";
})(Parameters = exports.Parameters || (exports.Parameters = {}));
exports.validationMiddleware = ({ schema, parameters, }) => async (req, res, next) => {
    try {
        await schema.validateAsync(req[parameters]);
        next();
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};
//# sourceMappingURL=validation-middleware.js.map