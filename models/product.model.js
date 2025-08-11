const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true
    },
    price: {
        type: mongoose.Decimal128,
        required:true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
