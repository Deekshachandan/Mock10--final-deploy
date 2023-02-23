const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flight",
      required: true,
    },
  },

);

const BookingModel = mongoose.model("booking", bookSchema);

module.exports = { BookingModel }