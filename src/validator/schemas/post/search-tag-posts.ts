import Joi from "joi";

export const SearchTagPosts = Joi.object().keys({
  tag: Joi.string().required(),
});
