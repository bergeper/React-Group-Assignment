const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Guest", GuestSchema);
