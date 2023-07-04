const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    paymentMethod: {
      type: String,
    },
  },
  { timestamps: true }
);

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;
