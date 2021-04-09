"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidAdapter = void 0;
const uuid4_1 = __importDefault(require("uuid4"));
class UuidAdapter {
    async makeId() {
        const id = await uuid4_1.default().split("-");
        return id[2] + id[1] + id[0] + id[3] + id[4];
    }
}
exports.UuidAdapter = UuidAdapter;
//# sourceMappingURL=uuid-adapter.js.map