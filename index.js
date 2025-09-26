const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/configs');
const productRoutes = require('./src/routes/product.routes');
const categoryRoutes = require('./src/routes/category.routes');

// Create express app
const app = express();

// middleware 
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Home
app.get("/", (req, res) => {
  res.json({ message: "Welcome to E-commerce API" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start express server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});