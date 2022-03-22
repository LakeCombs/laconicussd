const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
    },
    input: { type: String },
    quantity: { type: Number },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Input", requestSchema);
