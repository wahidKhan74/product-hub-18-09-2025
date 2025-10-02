const { Sequelize  } = require('sequelize');
const config = require('./index');

// Initialize Sequelize
const sequelize = new Sequelize (
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: false, // Disable logging; default: console.log
  }
);

module.exports =  sequelize;