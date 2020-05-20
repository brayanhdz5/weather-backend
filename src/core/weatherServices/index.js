const { getMapboxData, getDarkskyData } = require('../getExternalServices');
const db = require('../../database/db.config');

const WeatherLog = db.cityWeater;

const getWhatherByCity =  async (city, ip) => {
  try {
    const MapboxData = await getMapboxData(city);

    if (!MapboxData)
      return null;
    
    const LAT = MapboxData[1];
    const LONG = MapboxData[0];

    const DarkSkyData = await getDarkskyData(LAT, LONG);

    if (!DarkSkyData)
      return null;

    const logSaved = await saveWhatherInfo(city, ip, DarkSkyData);

    if(!logSaved)
      console.log('Error Saving the Log')

    return DarkSkyData;
    
  }
  catch (err) {
    console.log('[services - getWhatherByCity]', err);
    return null;
  }
};

const saveWhatherInfo = async (city, ip, log) => {
  try {
    const response = await WeatherLog.create({
      id: `WeatherLog_${Math.random()* 53412}`,
      weatherInfo: log,
      ipRequest: ip,
      city: city
    });

    if (!response)
      return null;
    
    return response;

  }
  catch (err) {
    console.log('[services - saveWhatherInfo]', err);
    return null;
  }
};

module.exports = {
  getWhatherByCity
}