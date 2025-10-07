const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema( {
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
    },],
    totalAmount: Number,
    status: { type: String, default: "Pending" },
    shippingAddress: { type: String },
    paymentMethod: { type: String, default: "COD" }
    }, { timestamps: true }
);

module.exports =  mongoose.model("Order", orderSchema);