const express = require('express');

const validate = require('../middlewares/validate.middleware');
const { ProductController } = require('../controllers');
const { ProductValidation } = require('../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(ProductValidation.createProduct), ProductController.createProduct)
  .get(ProductController.getProducts);


router.route('/:id').get(ProductController.getProduct);

module.exports = router;