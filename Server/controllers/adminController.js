const User = require("../models/User");
const Booking = require("../models/Booking");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const bookings = await Booking.find().sort({ createdAt: -1 });

    const totalBookings = bookings.length;

    let totalRevenue = 0;

    bookings.forEach((booking) => {
      totalRevenue += booking.fare || 0;
    });

    res.json({
      totalUsers,
      totalBookings,
      totalRevenue,
      bookings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getDashboard };
