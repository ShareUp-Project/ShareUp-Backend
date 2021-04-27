import { ChangeNicknameController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeDbChangeNickname } from "../../usecases";

export const makeChangeNicknameController = (): Controller => {
  return new ChangeNicknameController(makeDbChangeNickname());
};
