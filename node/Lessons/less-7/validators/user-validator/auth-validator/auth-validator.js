const Joi = require('joi');

const { regexEnum: { EMAIL, PASSWORD } } = require('../../../configs');

module.exports = Joi.object({
  email: Joi.string().regex(EMAIL).required(),
  password: Joi.string().regex(PASSWORD).required()
});
