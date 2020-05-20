module.exports = (sequelize, Sequelize) => {
  const CityWeather = sequelize.define('cityweather', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    }, 
    weatherInfo: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    ipRequest: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    }

  });
  
  return CityWeather;
}