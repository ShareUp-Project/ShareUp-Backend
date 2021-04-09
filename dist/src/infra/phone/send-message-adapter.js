"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageAdapter = void 0;
const request_1 = __importDefault(require("request"));
const crypto_js_1 = __importDefault(require("crypto-js"));
class SendMessageAdapter {
    constructor(serviceId, access, secret, phone) {
        this.serviceId = serviceId;
        this.access = access;
        this.secret = secret;
        this.phone = phone;
    }
    send(phone, code) {
        const date = Date.now().toString();
        const uri = this.serviceId;
        const accessKey = this.access;
        const secretKey = this.secret;
        const method = "POST";
        const space = " ";
        const newLine = "\n";
        const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
        const url2 = `/sms/v2/services/${uri}/messages`;
        const hmac = crypto_js_1.default.algo.HMAC.create(crypto_js_1.default.algo.SHA256, secretKey);
        hmac.update(method);
        hmac.update(space);
        hmac.update(url2);
        hmac.update(newLine);
        hmac.update(date);
        hmac.update(newLine);
        hmac.update(accessKey);
        const hash = hmac.finalize();
        const signature = hash.toString(crypto_js_1.default.enc.Base64);
        request_1.default({
            method: method,
            json: true,
            uri: url,
            headers: {
                "Contenc-type": "application/json; charset=utf-8",
                "x-ncp-iam-access-key": accessKey,
                "x-ncp-apigw-timestamp": date,
                "x-ncp-apigw-signature-v2": signature,
            },
            body: {
                type: "SMS",
                countryCode: "82",
                from: this.phone,
                content: `[ShareUP] 인증코드 [${code}]`,
                messages: [
                    {
                        to: phone,
                    },
                ],
            },
        });
    }
}
exports.SendMessageAdapter = SendMessageAdapter;
//# sourceMappingURL=send-message-adapter.js.map