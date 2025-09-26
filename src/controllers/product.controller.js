const productModel = require('../models/product.model');
const categoryModel = require('../models/category.model');

// Get all products
function getAllProducts(req, res) {
    const products = productModel.getAll();
    res.json(products);
}

// Get product by ID
function getProductById(req, res) {
    const id = parseInt(req.params.id);
    const product = productModel.getById(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product not found" });
    }
}

// Add a new product
function addProduct(req, res) {
    const { name, price, categoryId } = req.body;
    const category = categoryModel.getById(categoryId);
    if (!category) {
        return res.status(400).json({ message: "Invalid category ID" });
    }
    const newProduct = productModel.create({ name, price, categoryId });
    res.status(201).json(newProduct);
}

// Update a product
function updateProduct(req, res) {
    const id = parseInt(req.params.id);
    const { name, price, categoryId } = req.body;
    const category = categoryModel.getById(categoryId);
    if (!category) {
        return res.status(400).json({ message: "Invalid category ID" });
    }
    const updatedProduct = productModel.update(id, { name, price, categoryId });
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}

// Delete a product
function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    const deletedProduct = productModel.remove(id);
    if (deletedProduct) {
        res.json(deletedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}


module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };