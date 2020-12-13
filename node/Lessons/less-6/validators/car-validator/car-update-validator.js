const Joi = require('joi');

const { constants: { CURRENT_YEAR } } = require('../../configs');

module.exports = Joi.object({
  price: Joi.number().positive(),
  model: Joi.string().alphanum(),
  year: Joi.number().min(1886).max(CURRENT_YEAR),
  user_id: Joi.number().integer()
});
