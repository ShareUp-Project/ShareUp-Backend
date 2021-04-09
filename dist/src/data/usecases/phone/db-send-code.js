"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSendCode = void 0;
class DbSendCode {
    constructor(setAuthRepository, makeCode, sendMessage) {
        this.setAuthRepository = setAuthRepository;
        this.makeCode = makeCode;
        this.sendMessage = sendMessage;
    }
    send(phone) {
        const code = this.makeCode.makeCode();
        this.setAuthRepository.setAuthCode({ phone, code });
        this.sendMessage.send(phone, code);
    }
}
exports.DbSendCode = DbSendCode;
//# sourceMappingURL=db-send-code.js.map