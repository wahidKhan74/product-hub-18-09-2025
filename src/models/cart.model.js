const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");
const Product = require("./product.model");
const User = require("./user.model");

const Cart = sequelize.define("Cart", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    }, { timestamps: true }
);

// Relations
User.hasMany(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Cart, { foreignKey: "productId" });
Cart.belongsTo(Product, { foreignKey: "productId" });

module.exports = Cart;