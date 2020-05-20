const express = require('express');
const { getWeatherInfo } = require('./city.controller');

const Router = express.Router();

  Router.post('/get_weather/:city', getWeatherInfo);

module.exports = Router;