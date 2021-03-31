import { GetAuthRepository, SetAuthRepository } from "@/data/protocols/db";
import redis from "redis";

const client = redis.createClient();

export class RedisRepository implements SetAuthRepository, GetAuthRepository {
  setAuthCode(data: SetAuthRepository.Params): void {
    client.set(data.phone, data.code);
    client.expire(data.phone, 180);
  }

  getAuthCode(phone: string): string {
    client.get(phone, (e, data) => {
      if (e) return e;
      return data;
    });
    return "";
  }
}
