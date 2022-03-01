const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

// Libraries configuration
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'react-blog/build')));
app.get('/', (req, res) => {
    // res.send({
    //     message: "Homepage1"
    // });
    res.sendFile('index.html');
});

// Use Product route
app.use('/', require('./routes/Product'));

// Post route
app.use('/', require('./routes/Post'));

app.listen(PORT, () => {
    console.log(`Server is running with port: ${PORT}`);
});