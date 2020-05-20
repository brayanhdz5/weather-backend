const Sequelize = require('sequelize');

const env = require('./db.env'); 

// Main Sequelize config
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
  timezone: env.timezone,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
  define: {
    charset: env.define.charset,
    dialectOptions: {
      collate: env.define.dialectOptions.collate,
    },
    timestamps: env.define.timestamps,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models imports
db.cityWeater = require('./models/cityWeater.model')(sequelize, Sequelize);



module.exports = db;
