const express = require('express');

// Create express app
const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send(`Hello , Server is up and running on ${port}.`);
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ]);
});
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 }
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

// handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});