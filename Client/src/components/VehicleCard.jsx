import "../styles/VehicleCard.css";

function VehicleCard({ icon, title, seats, price, selected, onSelect }) {
  return (
    <div
      className={`vehicle-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="vehicle-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{seats}</p>

      <h4>₹{price}</h4>

      <button type="button">Select</button>
    </div>
  );
}

export default VehicleCard;
