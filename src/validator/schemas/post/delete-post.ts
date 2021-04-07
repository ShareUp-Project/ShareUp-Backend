import Joi from "joi";

export const DeletePostsSchema = Joi.object().keys({
  id: Joi.string().required(),
});
