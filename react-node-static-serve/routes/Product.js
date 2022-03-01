const express = require('express');
const fs = require('fs');
const path = require('path');

const productRouter = express.Router();

let productData = [];

// Read product data
const file = path.join(__dirname, '/../data/db.json');
fs.readFile(file, (err, data) => {
    if (err) throw err;
    const convertedData = JSON.parse(data);
    productData = convertedData['products'];
});

// Product list API
productRouter.get('/api/products', (req, res) => {
    res.json(productData);
});

module.exports = productRouter;