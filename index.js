const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/configs');
const { sequelize } = require('./src/models');
const productRoutes = require('./src/routes/product.routes');
const categoryRoutes = require('./src/routes/category.routes');
const orderRoutes = require('./src/routes/order.routes');
const cartRoutes = require('./src/routes/cart.routes');
const userRoutes = require('./src/routes/user.routes');

// Create express app
const app = express();

// Store env variables inside express app settings
app.set("port", process.env.PORT || 3000);
app.set("db_host", process.env.DB_HOST || 'locahost');
app.set("db_user", process.env.DB_USER || 'root');
app.set("db_password", process.env.DB_PASSWORD || 'root');


// middleware 
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

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
  app.listen(app.get("port"), () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
  });
}).catch(err => {
  console.error("Unable to connect to the database:", err);
});