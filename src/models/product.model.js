const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");
const Category = require("./category.model");

const Product = sequelize.define("Product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    }, { timestamps: true }
);

// Relation: Product belongs to Category
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "CASCADE" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = Product;
