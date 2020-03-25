// models/Pin.js

const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  x_position: {
    type: String,
    required: true
  },
  y_position: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  sortiment: {
    type: String,
    required: true
  },

  usage: {
    type: String,
    required: true
  },

  homepage: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },

  confirm: {
    type: Boolean,
    required: true
  }
});

module.exports = Pin = mongoose.model("pin", PinSchema);
