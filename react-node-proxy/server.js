const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Libraries configuration
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: "Homepage1"
    });
});

// Use Product route
app.use('/', require('./routes/Product'));

// Post route
app.use('/', require('./routes/Post'));

app.listen(PORT, () => {
    console.log(`Server is running with port: ${PORT}`);
});