const productModel = require('../models/productModel');

const calculateTotalValue = (req, res) => {
    const products = req.body;

    if (!Array.isArray(products) || !products.length) {
        return res.status(400).json({ error: 'Invalid product list' });
    }

    productModel.addProducts(products, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add products' });
        }

        productModel.calculateTotalValue((err, totalValue) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to calculate total value' });
            }
            res.json({ totalValue });
        });
    });
};

module.exports = {
    calculateTotalValue,
};
