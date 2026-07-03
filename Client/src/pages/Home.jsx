import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home">
      <div className="overlay">
        <div className="hero">
          <h1>🚖 Ride Smarter with UCab</h1>

          <p>
            Fast • Safe • Affordable
            <br />
            Book your ride in seconds with live route tracking, instant driver
            assignment and secure payments.
          </p>

          <div className="hero-buttons">
            {user ? (
              <Link to="/booking">
                <button className="primary-btn">Book Your Ride</button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <button className="primary-btn">Get Started</button>
                </Link>

                <Link to="/login">
                  <button className="secondary-btn">Login</button>
                </Link>
              </>
            )}
          </div>

          <div className="features">
            <div className="feature-card">
              🚗
              <h3>Fast Booking</h3>
              <p>Book a ride within seconds.</p>
            </div>

            <div className="feature-card">
              📍
              <h3>Live Maps</h3>
              <p>Google Maps powered navigation.</p>
            </div>

            <div className="feature-card">
              ⭐<h3>Trusted Drivers</h3>
              <p>Verified drivers with ratings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
