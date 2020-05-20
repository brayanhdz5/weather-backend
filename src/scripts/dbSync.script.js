const db = require('../database/db.config');

const InitDbFromZero = () =>{
  // this script will remove all data from the Database server and re-create a new DB
  db.sequelize.sync({ force: true }).then(() => {
  }).then(() => {
    console.log('DB is Created');
  });
};

InitDbFromZero();