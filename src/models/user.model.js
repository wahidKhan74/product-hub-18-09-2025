const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema( {
        username: { type: String, required: true },
        email:  { type: String, required: true, unique: true },
        password:  { type: String, required: true },
        role: { type: String, enum: ["customer", "admin"], default: "customer" },
        phone: String,
        address: String
    }, { timestamps: true }
);

// Auto-hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
   try {
    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
})

// Compare password
userSchema.methods.matchPassword = async function (entredPassword) { 
    return await bcrypt.compare(entredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);