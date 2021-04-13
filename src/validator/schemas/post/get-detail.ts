import Joi from "joi";

export const GetDetailPostSchema = Joi.object().keys({
  id: Joi.string().required(),
});
