require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'ecommerce_db',
    dialect: process.env.DB_DIALECT || 'mysql', // or 'postgres', 'sqlite'
  },
};
