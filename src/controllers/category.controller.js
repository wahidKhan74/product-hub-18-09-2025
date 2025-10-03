const { Category } = require("../models");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json({ success: true, data: categories });
};

exports.getCategoryById = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ success: false, message: "Category not found" });
  res.json({ success: true, data: category });
};

exports.updateCategory = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ success: false, message: "Category not found" });
  await category.update(req.body);
  res.json({ success: true, data: category });
};

exports.deleteCategory = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) return res.status(404).json({ success: false, message: "Category not found" });
  await category.destroy();
  res.json({ success: true, message: "Category deleted" });
};
