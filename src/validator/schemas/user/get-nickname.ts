import Joi from "joi";

export const GetNicknameSchema = Joi.object().keys({
  id: Joi.string(),
});
