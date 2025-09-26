const productModel = require('../model/productModel');

// Get all products
function getAllProducts(req, res) {
    const products = productModel.getAll();
    res.render('products/list', { title: "Products", products });
}

// Show add form 
function showAddForm(req, res) {
    res.render('products/form', { title: "Add Product" , product: {}});
}

// Add a new product
function addProduct(req, res) {
    const { name, price } = req.body;
    productModel.add({ name, price: parseFloat(price) });
    res.redirect('/products');
}

// Delete a product
function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    productModel.remove(id);
    res.redirect('/products');
}

module.exports = {
    getAllProducts,
    showAddForm,
    addProduct,
    deleteProduct
};
