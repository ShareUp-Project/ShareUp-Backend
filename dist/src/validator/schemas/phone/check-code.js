"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCodeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.CheckCodeSchema = joi_1.default.object().keys({
    phone: joi_1.default.string().length(11).required(),
    code: joi_1.default.string().length(6).required(),
});
//# sourceMappingURL=check-code.js.map