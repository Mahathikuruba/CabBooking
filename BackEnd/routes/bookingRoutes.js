const express = require("express");
const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

router.put("/:id", updateBooking);

router.delete("/:id", deleteBooking);

module.exports = router;
