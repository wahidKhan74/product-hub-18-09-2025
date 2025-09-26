const categoryModel = require('../models/category.model');

// Get all categories
function getAllCategories(req, res) {
    const categories = categoryModel.getAll();
    res.json(categories);
}

// Get category by ID
function getCategoryById(req, res) {
    const id = parseInt(req.params.id);
    const category = categoryModel.getById(id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: "Category not found" });
    }
}

// Add a new category
function addCategory(req, res) {
    const { name } = req.body;
    const newCategory = categoryModel.create({ name });
    res.status(201).json(newCategory);
}

module.exports = { getAllCategories, getCategoryById, addCategory };