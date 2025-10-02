const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");
const User = require("./user.model");

const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.ENUM("pending", "completed", "cancelled"), defaultValue: "pending" },
    shippingAddress: { type: DataTypes.STRING },
    paymentMethod: { type: DataTypes.ENUM("COD", "CreditCard", "PayPal"), defaultValue: "COD" }
    }, { timestamps: true }
);

// Relations
User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

module.exports = Order;