const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  createProduct
};
