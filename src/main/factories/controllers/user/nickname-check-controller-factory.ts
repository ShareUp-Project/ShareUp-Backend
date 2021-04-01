import { NicknameCheckController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbFindUser } from "@/main/factories";

export const makeNicknameCheckController = (): Controller => {
  return new NicknameCheckController(makeDbFindUser());
};
