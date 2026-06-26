import "../styles/Booking.css";
import VehicleCard from "../components/VehicleCard";
import { useState } from "react";

function Booking() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [fare, setFare] = useState(0);
  const [arrivalTime, setArrivalTime] = useState("");
  return (
    <div className="booking-container">
      <div className="booking-card">
        <h1>🚖 Book Your Ride</h1>

        <p>Choose your ride and travel safely.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Pickup Location */}
          <label>Pickup Location</label>
          <input type="text" placeholder="Enter Pickup Location" />

          {/* Destination */}
          <label>Destination</label>
          <input type="text" placeholder="Enter Destination" />

          {/* Journey Date */}
          <label>Journey Date</label>
          <input type="date" />

          {/* Journey Time */}
          <label>Journey Time</label>
          <input type="time" />

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
                setFare(70);
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
                setFare(150);
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
                setFare(250);
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
                setFare(400);
                setArrivalTime("8 mins");
              }}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bold",
              color: "#2563eb",
            }}
          >
            Selected Ride: {selectedVehicle || "None"}
          </p>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "green",
            }}
          >
            Estimated Fare: ₹{fare}
          </p>

          <button type="submit">Book Ride</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
