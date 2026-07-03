const express = require("express");

const {
  createBooking,
  getBookings,
  getAllBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// Create Booking
router.post("/", createBooking);

// ⭐ IMPORTANT: Put this BEFORE "/:userId"
router.get("/all", getAllBookings);

// User Booking History
router.get("/:userId", getBookings);

// Update Booking
router.put("/:id", updateBooking);

// Delete Booking
router.delete("/:id", deleteBooking);

module.exports = router;
