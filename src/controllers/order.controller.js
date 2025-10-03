const { Order, OrderItem, User, Product } = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const { userId, items, shippingAddress, paymentMethod } = req.body;

    // Calculate total
    let totalAmount = 0;
    for (let item of items) {
      const product = await Product.findByPk(item.productId);
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }

    // Create order
    const order = await Order.create({ userId, totalAmount, shippingAddress, paymentMethod });

    // Create order items
    for (let item of items) {
      const product = await Product.findByPk(item.productId);
      if (product) {
        await OrderItem.create({
          orderId: order.id,
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
        });
      }
    }

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.findAll({ include: [User, OrderItem] });
  res.json({ success: true, data: orders });
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findByPk(req.params.id, { include: [User, OrderItem] });
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  res.json({ success: true, data: order });
};

exports.updateOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  await order.update(req.body);
  res.json({ success: true, data: order });
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  await order.destroy();
  res.json({ success: true, message: "Order deleted" });
};
