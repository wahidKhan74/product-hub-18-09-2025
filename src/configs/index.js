require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
     dburl: process.env.MONGO_URI || "mongodb://localhost:27017/products_hub"
  },
};
