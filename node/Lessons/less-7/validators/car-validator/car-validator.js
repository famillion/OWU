const Joi = require('joi');

const { constants: { CURRENT_YEAR } } = require('../../configs');

module.exports = Joi.object({
  price: Joi.number().positive().required(),
  model: Joi.string().alphanum().required(),
  year: Joi.number().min(1886).max(CURRENT_YEAR).required(),
  user_id: Joi.number().integer()
});
