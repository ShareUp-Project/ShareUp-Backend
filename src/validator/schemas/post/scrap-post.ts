import Joi from "joi";

export const ScrapPostsSchema = Joi.object().keys({
  id: Joi.string().required(),
});
