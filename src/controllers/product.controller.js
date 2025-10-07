const Product = require('../models/product.model');

// Get all products
exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find().populate("categoryId", "name description");
        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Get product by ID
exports.getProductById = async(req, res) => {
    try {
        const products = await Product.findById(req.params.id)
            .populate("categoryId", "name");

        if (!products || products.length < 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found with id " + req.params.id
            });
        }

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Add a new product
exports.addProduct = async(req, res) => {
    try {
        const { name, description, price, stock, categoryId } = req.body;
        const newProduct = await Product.create({ name, description, price, stock, categoryId });
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product created successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Update a product
exports.updateProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Delete a product
exports.deleteProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}