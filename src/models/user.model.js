const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("customer", "admin"), defaultValue: "customer" },
    phone: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING },
    }, { timestamps: true }
);

module.exports = User;