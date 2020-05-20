const express = require('express');

const app = express();


// Routers
const city_router = require('./network/city.routes');

app.use('/api/v1', city_router);


module.exports = app;