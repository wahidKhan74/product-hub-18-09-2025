const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productRoutes');

// Create express app
const app = express();
const port = 3000;

// set template engine
app.set('view engine', 'vash');
app.set('views', 'views');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Default home page routes
app.get('/', (req, res) => {
  res.render("index", { title: "Home" });
});

// Product routes
app.use('/products', productRoutes);

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ]);
});

app.get('/about', (req, res) => {
    res.json({
        app: 'Product Hub',
        version: '1.0.0',
        description: 'A simple product management API'
    });
});

app.get('/contact', (req, res) => {
    res.json({
        email: 'ecomm@exampl.com',
        phone: '+1234567890',
        address: '123 Ecomm St, Commerce City, CO',
        name: 'Product Hub' 
    });
});

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

// Start express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});