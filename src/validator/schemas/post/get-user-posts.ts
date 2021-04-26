import Joi from "joi";

export const GetUserPostsSchema = Joi.object().keys({
  id: Joi.string().required(),
});
