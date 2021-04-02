import { Decrypter, Encrypter } from "@/data/protocols";

import { sign, verify } from "jsonwebtoken";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly accessSecret: string,
    private readonly refreshSecret: string
  ) {}

  async encryptAccess(id: string): Promise<string> {
    return sign({ id }, this.accessSecret, {
      expiresIn: "1h",
    });
  }

  async encryptRefresh(id: string): Promise<string> {
    return sign({ id }, this.refreshSecret, {
      expiresIn: "1w",
    });
  }

  async decryptAccess(token: string): Promise<JwtAdapter.Result> {
    const bearer = token.split("Bearer ")[1];
    try {
      const decoded = await verify(bearer, this.accessSecret);
      return { decoded };
    } catch (e) {
      return { error: e };
    }
  }

  async decryptRefresh(token: string): Promise<JwtAdapter.Result> {
    const bearer = token.split("Bearer ")[1];
    try {
      const decoded = await verify(bearer, this.refreshSecret);
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
