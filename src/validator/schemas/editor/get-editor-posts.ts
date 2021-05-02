import Joi from "joi";

export const GetEditorPostsSchema = Joi.object().keys({
  page: Joi.string().required(),
});
