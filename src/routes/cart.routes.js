const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Routes for Carts
router.get('/', cartController.getCart);
router.get('/:userId', cartController.getCartByUserId);
router.post('/', cartController.addToCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

module.exports = router;