import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home">
      <div className="hero">
        <h1>Ride Smarter with UCab</h1>

        <p>Book safe, reliable, and affordable rides anytime, anywhere.</p>

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
      </div>
    </div>
  );
}

export default Home;
