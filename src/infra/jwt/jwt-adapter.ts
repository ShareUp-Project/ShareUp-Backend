import { Decrypter, Encrypter, TokenType } from "@/data/protocols";

import { sign, verify } from "jsonwebtoken";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly accessSecret: string,
    private readonly refreshSecret: string
  ) {}

  async encrypt(plaintext: string, type: TokenType): Promise<string> {
    switch (type) {
      case "access":
        return sign({ id: plaintext }, this.accessSecret, {
          expiresIn: "1h",
        });
      case "refresh":
        return sign({ id: plaintext }, this.refreshSecret, {
          expiresIn: "1w",
        });
    }
  }

  async decrypt(ciphertext: string, type: TokenType): Promise<string> {
    switch (type) {
      case "access":
        return verify(ciphertext, this.accessSecret) as any;
      case "refresh":
        return verify(ciphertext, this.refreshSecret) as any;
    }
  }
}
