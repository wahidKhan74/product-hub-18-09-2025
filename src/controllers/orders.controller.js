const orderModel = require('../models/order.model');

// Get all orders
function getAllOrders(req, res) {
    const orders = orderModel.getAll();
    res.json(orders);
}

// Get order by ID
function getOrderById(req, res) {
    const id = parseInt(req.params.id);
    const order = orderModel.getById(id);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({ message: "order not found" });
    }
}

// Add a new order
function addOrder(req, res) {
    const { name, price, categoryId } = req.body;
    const category = categoryModel.getById(categoryId);
    if (!category) {
        return res.status(400).json({ message: "Invalid category id" });
    }
    const neworder = orderModel.create({ name, price, categoryId });
    res.status(201).json(neworder);
}

// Update a order
function updateOrder(req, res) {
    const id = parseInt(req.params.id);
    const updatedorder = orderModel.update(id, { name, price, categoryId });
    if (updatedorder) {
        res.json(updatedorder);
    } else {
        res.status(404).json({ message: "order not found" });
    }
}

// Delete a order
function deleteOrder(req, res) {
    const id = parseInt(req.params.id);
    const deletedorder = orderModel.remove(id);
    if (deletedorder) {
        res.json(deletedorder);
    } else {
        res.status(404).json({ message: "order not found" });
    }
}


module.exports = { getAllOrders, getOrderById, addOrder, updateOrder, deleteOrder };