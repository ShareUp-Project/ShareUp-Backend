"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCodeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.SendCodeSchema = joi_1.default.object().keys({
    phone: joi_1.default.string().length(11).required(),
});
//# sourceMappingURL=send-code.js.map