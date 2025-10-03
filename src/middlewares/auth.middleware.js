const jwt = require("jsonwebtoken");

// Middleware to verify JWT
module.exports = (req, res, next) =>{
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET||"mysecretkey");
        req.user = decoded; // decoded payload (e.g. { id, username, role })
        next();
    } catch(err) {
         return res.status(403).json({ success: false, message: "Unauthorized: Invalid or expired token" });
    }
}