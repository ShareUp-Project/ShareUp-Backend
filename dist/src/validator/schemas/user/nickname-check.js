"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicknameCheckSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.NicknameCheckSchema = joi_1.default.object().keys({
    nickname: joi_1.default.string().min(2).max(10).required(),
});
//# sourceMappingURL=nickname-check.js.map