// server.js
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

// Default route to handle root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Products API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
