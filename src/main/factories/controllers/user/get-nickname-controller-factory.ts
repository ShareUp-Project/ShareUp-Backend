import { GetNicknameController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbGetNickname } from "@/main/factories";

export const makeGetNicknameController = (): Controller => {
  return new GetNicknameController(makeDbGetNickname());
};
