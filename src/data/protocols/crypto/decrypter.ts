export interface Decrypter {
  decrypt: (ciphertext: string, type: TokenType) => Promise<string>;
}

export enum TokenType {
  ACCESS = "access",
  REFRESH = "refresh",
}
