import { DbSendCode } from "@/data/usecases";
import { SendCode } from "@/domain/usecases";
import { CodeAdapter } from "@/infra/code";
import { RedisRepository } from "@/infra/db/redis/redis-repository";
import { SendMessageAdapter } from "@/infra/phone";
import env from "@/main/config/env";

export const makeDbSendCode = (): SendCode => {
  const SERVICE_ID = env.sens.id;
  const ACCESS = env.sens.access;
  const SECRET = env.sens.secret;
  const PHONE = env.sens.phone;
  const redisRepository = new RedisRepository();
  const codeAdapter = new CodeAdapter();
  const sendMessageAdapter = new SendMessageAdapter(
    SERVICE_ID,
    ACCESS,
    SECRET,
    PHONE
  );
  return new DbSendCode(redisRepository, codeAdapter, sendMessageAdapter);
};
