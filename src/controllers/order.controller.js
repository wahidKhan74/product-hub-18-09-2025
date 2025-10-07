const Order = require("../models/order.model");
const Cart = require("../models/cart.model");

exports.createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    const order = await Order.create({
      userId,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount,
      status: "Pending",
    });

    await Cart.findOneAndDelete({ userId }); // Clear cart after order

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrders = async (req, res) => {
 try {
    const orders = await Order.find().populate("userId", "username email");
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId }).populate("products.productId");
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
   try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const userId = req.user._id;
  const order = await Order.findOneAndDelete({ userId });
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  res.json({ success: true, message: "Order deleted" });
};
