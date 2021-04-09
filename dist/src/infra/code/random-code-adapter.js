"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeAdapter = void 0;
class CodeAdapter {
    makeCode() {
        let code = "";
        for (let i = 0; i < 6; i++)
            code += Math.floor(Math.random() * 10).toString();
        return code;
    }
}
exports.CodeAdapter = CodeAdapter;
//# sourceMappingURL=random-code-adapter.js.map