import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Ride Smarter with UCab</h1>

        <p>Book safe, reliable, and affordable rides anytime, anywhere.</p>

        <div className="hero-buttons">
          <Link to="/register">
            <button className="primary-btn">Get Started</button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
