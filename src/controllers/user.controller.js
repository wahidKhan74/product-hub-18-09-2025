const User  = require("../models/user.model");

// Create User
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true,message: "User created successfully", data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
 try {
    const users = await User.find().select("-password"); // hide passwords
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users", error: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
   try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user", error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
   try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
 try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
};
