const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/configs');
const productRoutes = require('./src/routes/product.routes');
const categoryRoutes = require('./src/routes/category.routes');
const userRoutes = require('./src/routes/user.routes');
const chatbotRoutes = require('./src/routes/chatbot.routes');

// Create express app
const app = express();

// middleware 
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);
app.use('/api', chatbotRoutes);

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