import Joi from "joi";

export const SearchTagPosts = Joi.object().keys({
  page: Joi.string().required(),
  word: Joi.string().required(),
});
