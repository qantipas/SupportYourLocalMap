// models/Pin.js

const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    title: {
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
    }
});

module.exports = Pin = mongoose.model("pin", PinSchema);