const { Cart, User, Product } = require("../models");

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await Cart.create({ userId, productId, quantity });
    res.status(201).json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findAll({ include: [User, Product] });
  res.json({ success: true, data: cart });
};

exports.getCartByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.findAll({
      where: { userId },
      include: [
        { model: Product, attributes: ["id", "name", "price"] },
        { model: User, attributes: ["id", "username", "email"] }
      ]
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ success: false, message: "No cart items found for this user" });
    }

    res.status(200).json({ success: true, data: cartItems });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  const cart = await Cart.findByPk(req.params.id);
  if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
  await cart.update(req.body);
  res.json({ success: true, data: cart });
};

exports.deleteCart = async (req, res) => {
  const cart = await Cart.findByPk(req.params.id);
  if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
  await cart.destroy();
  res.json({ success: true, message: "Cart item removed" });
};
