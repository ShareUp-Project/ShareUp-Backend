"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.auth = adapters_1.adaptMiddleware(factories_1.makeAuthMiddleware());
//# sourceMappingURL=auth.js.map