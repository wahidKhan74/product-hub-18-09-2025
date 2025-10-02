const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/configs');
const { sequelize } = require('./src/models');
const productRoutes = require('./src/routes/product.routes');
// const categoryRoutes = require('./src/routes/category.routes');
// const orderRoutes = require('./src/routes/orders.routes');

// Create express app
const app = express();

// middleware 
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
// app.use('/categories', categoryRoutes);
// app.use('/orders', orderRoutes);

// Home
app.get("/", (req, res) => {
  res.json({ message: "Welcome to E-commerce API" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start db sync and express server
sequelize.sync({ alter: true }).then(() => {  // auto-create/update tables
  console.log('Database connected');
  console.log("Database & tables synced successfully");
  // Server logic
  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
}).catch(err => {
  console.error("Unable to connect to the database:", err);
});