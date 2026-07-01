const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    pickup: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    journeyDate: {
      type: String,
      required: true,
    },

    journeyTime: {
      type: String,
      required: true,
    },

    passengers: {
      type: Number,
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    fare: {
      type: Number,
      required: true,
    },
    distance: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Booking", bookingSchema);
