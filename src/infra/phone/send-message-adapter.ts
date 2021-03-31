import { SendMessage } from "@/data/protocols";

import request from "request";
import cryptojs from "crypto-js";

export class SendMessageAdapter implements SendMessage {
  constructor(
    private readonly serviceId: string,
    private readonly access: string,
    private readonly secret: string,
    private readonly phone: string
  ) {}

  send(phone: string, code: string): void {
    const date = Date.now().toString();
    const uri = this.serviceId;
    const accessKey = this.access;
    const secretKey = this.secret;
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;

    const hmac = cryptojs.algo.HMAC.create(cryptojs.algo.SHA256, secretKey);

    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();
    const signature = hash.toString(cryptojs.enc.Base64);

    request({
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
