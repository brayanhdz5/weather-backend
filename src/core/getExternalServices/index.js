const fetch = require('node-fetch');
const { DarkSky, Mapbox } = require ('../configs/externalApi.config');

const getMapboxData = async (city) => {
  try {
    const data = await fetch(`${Mapbox.base_url}${city}.json?access_token=${Mapbox.token}`);
    const response = await data.json();
    
    return response.features[0].bbox;
  }
  catch (err) {
    console.log('[getMapboxData] error: ',err);
    return null;
  }
}

const getDarkskyData = async (LAT, LONG) => {
  try {
    const data = await fetch(`${DarkSky.base_url}${LAT},${LONG}`);
    const response = await data.json();
    return response;
  }
  catch (err) {
    console.log('[getDarkskyData] error: ',err);
    return null;
  }
}

module.exports = {
  getMapboxData,
  getDarkskyData
}