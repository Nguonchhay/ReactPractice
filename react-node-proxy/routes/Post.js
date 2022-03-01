const express = require('express');
const fs = require('fs');
const path = require('path');

const postRouter = express.Router();

let itemData = [];

// Read product data
const file = path.join(__dirname, '/../data/db.json');
fs.readFile(file, (err, data) => {
    if (err) throw err;
    const convertedData = JSON.parse(data);
    itemData = convertedData['posts'];
});

// Product list API
postRouter.get('/api/posts', (req, res) => {
    res.json(itemData);
});

module.exports = postRouter;