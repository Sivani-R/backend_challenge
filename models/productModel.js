const db = require('../config/database');

const addProducts = (products, callback) => {
    const stmt = db.prepare(`INSERT INTO products (name, price, quality) VALUES (?, ?, ?)`);
    for (const product of products) {
        stmt.run(product.name, product.price, product.quality);
    }
    stmt.finalize(callback);
};

const calculateTotalValue = (callback) => {
    db.get(`SELECT SUM(price * quality) AS totalValue FROM products`, (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, row.totalValue || 0);
    });
};

module.exports = {
    addProducts,
    calculateTotalValue,
};
