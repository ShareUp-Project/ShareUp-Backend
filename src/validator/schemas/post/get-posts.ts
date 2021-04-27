import Joi from "joi";

export const GetPostsSchema = Joi.object().keys({
  page: Joi.string().required(),
  category: Joi.string(),
});
