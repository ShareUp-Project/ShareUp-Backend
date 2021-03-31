export interface GetAuthRepository {
  getAuthCode: (phone: string) => string;
}
