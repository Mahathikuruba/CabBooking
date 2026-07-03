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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      default: "Booked",
    },
    driverName: {
      type: String,
      default: "",
    },

    driverPhone: {
      type: String,
      default: "",
    },

    vehicleNumber: {
      type: String,
      default: "",
    },

    driverRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Booking", bookingSchema);
