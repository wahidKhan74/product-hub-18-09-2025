const User = require('./user.model');
const Product = require('./product.model');
const Category = require('./category.model');
const Order = require('./order.model');
const OrderItem = require("./orderItem.model");
const Cart = require('./cart.model')
const sequelize = require('../configs/db');

module.exports = {
    sequelize,
    User,
    Product,
    Category,
    Order,
    OrderItem,
    Cart
};
