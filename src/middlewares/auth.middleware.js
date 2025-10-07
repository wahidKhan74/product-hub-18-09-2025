const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Middleware to verify JWT
module.exports = async (req, res, next) =>{
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }
    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET||"mysecretkey");
        req.user =  await User.findById(decoded.id).select("-password");
        next();
    } catch(err) {
         return res.status(403).json({ success: false, message: "Unauthorized: Invalid or expired token" });
    }
}