import { Decrypter, Encrypter } from "@/data/protocols";

import { sign, verify } from "jsonwebtoken";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly accessSecret: string,
    private readonly refreshSecret: string
  ) {}

  async encryptAccess(identity: string): Promise<string> {
    return sign({ identity }, this.accessSecret, {
      expiresIn: "1h",
    });
  }

  async encryptRefresh(identity: string): Promise<string> {
    return sign({ identity }, this.refreshSecret, {
      expiresIn: "1w",
    });
  }

  async decryptAccess(token: string): Promise<JwtAdapter.Result> {
    try {
      const decoded = await verify(token, this.accessSecret);
      return { decoded };
    } catch (e) {
      return { error: e };
    }
  }

  async decryptRefresh(token: string): Promise<JwtAdapter.Result> {
    try {
      const decoded = await verify(token, this.refreshSecret);
      return { decoded };
    } catch (e) {
      return { error: e };
    }
  }
}

export namespace JwtAdapter {
  export type Result = {
    error?: Error;
    decoded?: string | object;
  };
}
