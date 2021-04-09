"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtAdapter {
    constructor(accessSecret, refreshSecret) {
        this.accessSecret = accessSecret;
        this.refreshSecret = refreshSecret;
    }
    async encryptAccess(identity) {
        return jsonwebtoken_1.sign({ identity }, this.accessSecret, {
            expiresIn: "1h",
        });
    }
    async encryptRefresh(identity) {
        return jsonwebtoken_1.sign({ identity }, this.refreshSecret, {
            expiresIn: "1w",
        });
    }
    async decryptAccess(token) {
        try {
            const decoded = await jsonwebtoken_1.verify(token, this.accessSecret);
            return { decoded };
        }
        catch (e) {
            return { error: e };
        }
    }
    async decryptRefresh(token) {
        try {
            const decoded = await jsonwebtoken_1.verify(token, this.refreshSecret);
            return { decoded };
        }
        catch (e) {
            return { error: e };
        }
    }
}
exports.JwtAdapter = JwtAdapter;
//# sourceMappingURL=jwt-adapter.js.map