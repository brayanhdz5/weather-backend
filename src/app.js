const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const { createWriteStream } = require('fs');
const { join } = require('path');

const app = express();

// main midlewares
app.use(cors());

const accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('dev', { stream: accessLogStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
const city_router = require('./network/city.routes');

app.use('/api/v1', city_router);


module.exports = app;