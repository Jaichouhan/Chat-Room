const mongoose = require("mongoose");

const itemsData = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const data = mongoose.model("items", itemsData);

module.exports = data;
