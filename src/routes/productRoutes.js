const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// define routes
router.get("/", productController.getAllProducts);
router.get("/add", productController.showAddForm);
router.post("/add", productController.addProduct);
router.post("/delete/:id", productController.deleteProduct);

module.exports = router;