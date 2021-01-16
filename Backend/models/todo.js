const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
  // deadLine: {
  //   type: Date,
  //   required: false,
  // },
});

module.exports = mongoose.model("Todo", todoSchema);
