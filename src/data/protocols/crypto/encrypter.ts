export interface Encrypter {
  encryptAccess: (id: string) => Promise<string>;
  encryptEditor: (id: string) => Promise<string>;
  encryptRefresh: (id: string) => Promise<string>;
}
