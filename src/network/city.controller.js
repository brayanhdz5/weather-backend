const { getWhatherByCity } = require('../core/weatherServices');

const getWeatherInfo = async (req, res) => {
  try {
    const { city } = req.params;
    const ip =  req.connection.remoteAddress;

    if (!city) 
      res.status(400).json({ message: 'no city provided'})
    
    const data = await getWhatherByCity(city, ip);

    if (!data) {
      return res.status(404).json({
        message: 'Invalid city name provided',
        data: null,
        errors: 'we can not find that city'
      });
    }

    return res.status(200).json({
      message: 'Here is the data from DarkSky.com',
      data: data,
      errors: null
    });

  }
  catch (err) {
    return res.json({
      message: 'este es el catch',
      error: err
    });
  }
}

module.exports = {
  getWeatherInfo

}