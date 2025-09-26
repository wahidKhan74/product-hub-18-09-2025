const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// Routes for categories
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.addCategory);

module.exports = router;
