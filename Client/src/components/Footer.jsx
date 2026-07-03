import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>🚖 UCab</h2>
          <p>Smart Cab Booking System</p>
        </div>

        <div className="footer-middle">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booking">Book Ride</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>

          <p>📧 support@ucab.com</p>

          <p>📞 +91 98765 43210</p>

          <p>📍 Mohan Babu University</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 UCab | Smart Cab Booking System
      </div>
    </footer>
  );
}

export default Footer;
