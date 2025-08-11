const { Product } = require('../models');

/**
 * Create a product
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createProduct = async (productBody) => {
  return Product.create(productBody);
};

/**
 * Query for products with pagination
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryProducts = async (filter, options) => {
  return Product.paginate(filter, options);
};

/**
 * Get product by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getProduct = async (id) => {
  return Product.findById(id);
};

module.exports = {
  createProduct,
  getProduct,
  queryProducts
};