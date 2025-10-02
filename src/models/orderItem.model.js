const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");
const Order = require("./order.model");
const Product = require("./product.model");

const OrderItem = sequelize.define("OrderItem", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false }, // snapshot price
}, { timestamps: true });

// Relations
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderItem, { foreignKey: "productId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = OrderItem;