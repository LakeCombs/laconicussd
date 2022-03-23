const mongoose = require("mongoose");
const User = require("./user");

const requestSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    phoneNumber: {
      type: String,
    },
    input: { type: String },
    quantity: { type: Number },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Input", requestSchema);
