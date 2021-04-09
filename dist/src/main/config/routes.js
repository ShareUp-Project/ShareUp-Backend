"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("@/main/routes/user"));
const auth_1 = __importDefault(require("@/main/routes/auth"));
const phone_1 = __importDefault(require("@/main/routes/phone"));
const post_1 = __importDefault(require("@/main/routes/post"));
exports.default = (app) => {
    const router = express_1.Router();
    app.use("/api", router);
    user_1.default(router);
    auth_1.default(router);
    phone_1.default(router);
    post_1.default(router);
};
//# sourceMappingURL=routes.js.map