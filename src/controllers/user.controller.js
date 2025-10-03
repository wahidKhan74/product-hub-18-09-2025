const { User } = require("../models");

// Create User
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ success: true, data: users });
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  res.json({ success: true, data: user });
};

// Update User
exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  await user.update(req.body);
  res.json({ success: true, data: user });
};

// Delete User
exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  await user.destroy();
  res.json({ success: true, message: "User deleted" });
};
