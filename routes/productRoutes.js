const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/calculate-total', productController.calculateTotalValue);

module.exports = router;
