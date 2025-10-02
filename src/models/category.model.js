const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const Category = sequelize.define("Category", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT },
    }, { timestamps: true }
);
module.exports = Category;