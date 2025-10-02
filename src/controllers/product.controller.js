const {Product} = require('../models');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: 'Category' });
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
exports.getProductById = async (req, res) =>{
    try {
        const products = await Product.findByPk( req.params.id,
            { include: 'Category' }
        );
         if (!product) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found with id "+ req.params.id 
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
exports.addProduct = async (req, res) => {
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
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, categoryId } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        const newProduct = await Product.update({ name, description, price, stock, categoryId });
        res.status(200).json({
            success: true,
            data: newProduct,
            message: "Product updated successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    await product.destroy();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
