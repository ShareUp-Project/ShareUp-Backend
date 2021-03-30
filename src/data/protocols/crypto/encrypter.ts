export interface Encrypter {
  encrypt: (plaintext: string, type: TokenType) => Promise<string>;
}

export enum TokenType {
  ACCESS = "access",
  REFRESH = "refresh",
}
