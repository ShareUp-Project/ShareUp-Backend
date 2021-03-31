export interface GetAuthRepository {
  getAuthCode: (phone: string) => Promise<Error | string>;
}
