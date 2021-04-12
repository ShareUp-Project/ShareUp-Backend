"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.CreateUserSchema = joi_1.default.object().keys({
    phone: joi_1.default.string().length(11).required(),
    password: joi_1.default.string()
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        .required(),
    nickname: joi_1.default.string().min(2).max(10).required(),
});
//# sourceMappingURL=create-user.js.map