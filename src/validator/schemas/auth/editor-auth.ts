import Joi from "joi";

export const EditorAuthSchema = Joi.object().keys({
  id: Joi.string().required(),
  password: Joi.string().required(),
});
