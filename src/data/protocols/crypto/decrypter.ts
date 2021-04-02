export interface Decrypter {
  decryptAccess: (token: string) => Promise<Decrypter.Result>;
  decryptRefresh: (token: string) => Promise<Decrypter.Result>;
}

export namespace Decrypter {
  export type Result = {
    e?: Error;
    decoded?: string | object;
  };
}
