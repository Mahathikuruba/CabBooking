import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Booking.css";
import VehicleCard from "../components/VehicleCard";
import axios from "axios";

import GoogleMapComponent from "../components/GoogleMap";

function Booking() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first.");
      navigate("/login");
    }
  }, [navigate]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [fare, setFare] = useState(0);
  const [arrivalTime, setArrivalTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [recommended, setRecommended] = useState("Bike");
  const [bookingData, setBookingData] = useState({
    pickup: "",
    destination: "",
    journeyDate: "",
    journeyTime: "",
  });
  const [driverDetails, setDriverDetails] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Passenger Count
  const handlePassengers = (e) => {
    const count = Number(e.target.value);

    setPassengers(count);

    if (count === 1) {
      setRecommended("Bike");
    } else if (count <= 4) {
      setRecommended("Mini");
    } else if (count <= 5) {
      setRecommended("Sedan");
    } else {
      setRecommended("SUV");
    }
  };

  // Handle Booking
  const handleBooking = async () => {
    console.log("Book Ride button clicked");

    if (
      !bookingData.pickup ||
      !bookingData.destination ||
      !bookingData.journeyDate ||
      !bookingData.journeyTime
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!selectedVehicle) {
      alert("Please select a vehicle.");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const booking = {
        pickup: bookingData.pickup,
        destination: bookingData.destination,
        journeyDate: bookingData.journeyDate,
        journeyTime: bookingData.journeyTime,
        passengers,
        vehicle: selectedVehicle,
        fare,
        distance: bookingData.distance,
        duration: bookingData.duration,
        userId: user._id,
      };
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        booking,
      );

      setDriverDetails({
        driverName: res.data.booking.driverName,
        driverPhone: res.data.booking.driverPhone,
        vehicleNumber: res.data.booking.vehicleNumber,
        driverRating: res.data.booking.driverRating,
      });

      alert("Ride Booked Successfully!");

      setBookingData({
        pickup: "",
        destination: "",
        journeyDate: "",
        journeyTime: "",
      });

      setPassengers(1);
      setSelectedVehicle("");
      setFare(0);
      setArrivalTime("");
      setRecommended("Bike");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h1>🚖 Book Your Ride</h1>

        <p>Choose your ride and travel safely.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Pickup */}
          <label>Pickup Location</label>
          <input
            type="text"
            name="pickup"
            placeholder="Enter Pickup Location"
            value={bookingData.pickup}
            onChange={handleChange}
          />

          {/* Destination */}
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter Destination"
            value={bookingData.destination}
            onChange={handleChange}
          />

          {/* Date */}
          <label>Journey Date</label>
          <input
            type="date"
            name="journeyDate"
            value={bookingData.journeyDate}
            onChange={handleChange}
          />

          {/* Time */}
          <label>Journey Time</label>
          <input
            type="time"
            name="journeyTime"
            value={bookingData.journeyTime}
            onChange={handleChange}
          />

          {/* Passenger Count */}
          <label>Number of Passengers</label>

          <input
            type="number"
            min="1"
            max="7"
            value={passengers}
            onChange={handlePassengers}
          />

          <p
            style={{
              textAlign: "center",
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            🚖 Recommended Vehicle: {recommended}
          </p>
          <GoogleMapComponent
            bookingData={bookingData}
            setBookingData={setBookingData}
            fare={fare}
            setFare={setFare}
          />

          {/* Vehicle Selection */}

          <label>Select Your Ride</label>

          <div className="vehicle-list">
            <VehicleCard
              icon="🛵"
              title="Bike"
              seats="1 Passenger"
              price="70"
              selected={selectedVehicle === "Bike"}
              onSelect={() => {
                setSelectedVehicle("Bike");
                
                setArrivalTime("2 mins");
              }}
            />

            <VehicleCard
              icon="🚗"
              title="Mini"
              seats="4 Passengers"
              price="150"
              selected={selectedVehicle === "Mini"}
              onSelect={() => {
                setSelectedVehicle("Mini");
               
                setArrivalTime("4 mins");
              }}
            />

            <VehicleCard
              icon="🚙"
              title="Sedan"
              seats="5 Passengers"
              price="250"
              selected={selectedVehicle === "Sedan"}
              onSelect={() => {
                setSelectedVehicle("Sedan");
                
                setArrivalTime("6 mins");
              }}
            />

            <VehicleCard
              icon="🚐"
              title="SUV"
              seats="7 Passengers"
              price="400"
              selected={selectedVehicle === "SUV"}
              onSelect={() => {
                setSelectedVehicle("SUV");
                
                setArrivalTime("8 mins");
              }}
            />
          </div>

          <div className="ride-summary">
            <h2>🚖 Ride Summary</h2>

            <div className="summary-row">
              <span>Vehicle</span>
              <strong>{selectedVehicle || "--"}</strong>
            </div>

            <div className="summary-row">
              <span>Fare</span>
              <strong>₹{fare}</strong>
            </div>

            <div className="summary-row">
              <span>Distance</span>
              <strong>{bookingData.distance || "--"}</strong>
            </div>

            <div className="summary-row">
              <span>ETA</span>
              <strong>{bookingData.duration || arrivalTime || "--"}</strong>
            </div>

            <div className="summary-row">
              <span>Status</span>
              <strong style={{ color: "#16a34a" }}>🟢 Available</strong>
            </div>
          </div>
          {driverDetails && (
            <div className="driver-card">
              <h3>✅ Driver Assigned</h3>

              <p>
                <strong>Driver:</strong> {driverDetails.driverName}
              </p>

              <p>
                <strong>Phone:</strong> {driverDetails.driverPhone}
              </p>

              <p>
                <strong>Vehicle No:</strong> {driverDetails.vehicleNumber}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {driverDetails.driverRating}
              </p>
            </div>
          )}

          <br />

          <button type="button" onClick={handleBooking}>
            Book Ride
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
