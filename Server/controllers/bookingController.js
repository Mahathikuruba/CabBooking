const Booking = require("../models/Booking");
const User = require("../models/User");

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
      userId,
    } = req.body;

    const drivers = [
      {
        driverName: "Ravi Kumar",
        driverPhone: "9876543210",
        vehicleNumber: "AP39 AB 1234",
        driverRating: 4.8,
      },
      {
        driverName: "Suresh Reddy",
        driverPhone: "9123456780",
        vehicleNumber: "AP39 CD 5678",
        driverRating: 4.7,
      },
      {
        driverName: "Rahul Sharma",
        driverPhone: "9988776655",
        vehicleNumber: "AP39 EF 9012",
        driverRating: 4.9,
      },
    ];

    const randomDriver = drivers[Math.floor(Math.random() * drivers.length)];

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
      userId,
      ...randomDriver,
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

// User Bookings
const getBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await Booking.find({ userId });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ⭐ NEW ADMIN FUNCTION
const getAllBookings = async (req, res) => {
  console.log("🔥 getAllBookings HIT");
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    const totalBookings = bookings.length;

    let totalRevenue = 0;

    bookings.forEach((booking) => {
      totalRevenue += booking.fare || 0;
    });

    const totalUsers = await User.countDocuments();

    res.json({
      totalUsers,
      totalBookings,
      totalRevenue,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
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
  getAllBookings,
  updateBooking,
  deleteBooking,
};
