import Joi from "joi";

export const GetProfileSchema = Joi.object().keys({
  id: Joi.string(),
});
