const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// ================= Register (Sign Up) =================
exports.register = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    // Create user
    const user = await User.create(req.body);

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username, role: user.role },
      process.env.JWT_SECRET || "secretKey",
      { expiresIn: "1h" }
    );

    res.status(201).json({ success: true, data: { user, token } });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: err.message });
  }
};

// ================= Sign In (Login) =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Compare password
     if (!(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username, role: user.role },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1h" }
    );

    res.status(200).json({ success: true, data: { user, token } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
