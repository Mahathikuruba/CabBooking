const Booking = require("../models/Booking");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const {
      pickup,
      destination,
      journeyDate,
      journeyTime,
      passengers,
      vehicle,
      fare,
      distance,
      duration,
    } = req.body;

    const booking = await Booking.create({
      pickup,
      destination,
      journeyDate,
      journeyTime,
      passengers,
      vehicle,
      fare,
      distance,
      duration,
    });

    res.status(201).json({
      success: true,
      message: "Ride Booked Successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Booking
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Booking Updated",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Booking
const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booking Cancelled Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
};
