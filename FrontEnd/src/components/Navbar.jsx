import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🚖 UCab</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/booking">Book Ride</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
