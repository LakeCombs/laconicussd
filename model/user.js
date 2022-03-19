const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
