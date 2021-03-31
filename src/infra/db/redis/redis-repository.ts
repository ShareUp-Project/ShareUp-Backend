import { GetAuthRepository, SetAuthRepository } from "@/data/protocols/db";
import redis from "redis";
import env from "@/main/config/env";

const REDIS_HOST = env.redis.host;
const client = redis.createClient({ host: REDIS_HOST });

export class RedisRepository implements SetAuthRepository, GetAuthRepository {
  setAuthCode(data: SetAuthRepository.Params): void {
    client.set(data.phone, data.code);
    client.expire(data.phone, 180);
  }

  getAuthCode(phone: string): string {
    let code = "";
    client.get(phone, (e, data) => {
      if (e) return e;
      code = data;
    });
    return code;
  }
}
