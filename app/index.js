const {host, port} = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');

// setup
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// User API
app.use('/api/users', require('.userAPI'));

// Book API
app.use('/api/books', require('.bookAPI'));

// server startup
app.listen(port, () => console.log(`Server started at http://${host}:${port}`));