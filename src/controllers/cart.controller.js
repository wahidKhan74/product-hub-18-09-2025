const { Cart, User, Product } = require("../models/cart.model");

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(i => i.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    }
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCart = async (req, res) => {
  const cart = await Cart.find().populate("items.productId");
  res.json({ success: true, data: cart });
};

exports.getCartByUserId = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });
    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();

    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCart = async (req, res) => {
   try {
    const userId = req.user._id;
    await Cart.findOneAndDelete({ userId });
    res.json({ success: true, message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
