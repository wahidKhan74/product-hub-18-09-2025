const mongoose = require('mongoose');
const config = require('./index');

// Initialize Sequelize
const connectDB = async ()=> {
  try {
    await mongoose.connect(config.db.dburl)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));
  } catch (error) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }

}

module.exports =  connectDB;