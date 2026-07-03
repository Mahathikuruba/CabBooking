import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BookingHistory.css";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.get(
        `http://localhost:5000/api/bookings/${user._id}`,
      );

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="history-container">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-card-history" key={booking._id}>
            <div className="booking-header">
              <div className="vehicle-title">🚖 {booking.vehicle}</div>

              <div className="status-badge">{booking.status}</div>
            </div>

            <div className="booking-info">
              <p>
                <strong>📍 Pickup:</strong> {booking.pickup}
              </p>

              <p>
                <strong>🏁 Destination:</strong> {booking.destination}
              </p>

              <p>
                <strong>📅 Date:</strong> {booking.journeyDate}
              </p>

              <p>
                <strong>🕒 Time:</strong> {booking.journeyTime}
              </p>

              <p>
                <strong>👥 Passengers:</strong> {booking.passengers}
              </p>

              <p>
                <strong>💰 Fare:</strong> ₹{booking.fare}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingHistory;
