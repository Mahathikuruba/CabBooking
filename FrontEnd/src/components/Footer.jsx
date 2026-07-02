import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>🚖 UCab</h2>
          <p>Smart Cab Booking System</p>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: support@ucab.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 UCab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
