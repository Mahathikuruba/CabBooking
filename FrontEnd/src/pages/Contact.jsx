import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>📞 Contact Us</h1>

        <p className="contact-text">
          Have questions or need assistance? We'd love to hear from you. Fill
          out the form below or use our contact information.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>📍 Office Address</h2>
            <p>Mohan Babu University</p>
            <p>Tirupati, Andhra Pradesh</p>

            <h2>📧 Email</h2>
            <p>support@ucab.com</p>

            <h2>📞 Phone</h2>
            <p>+91 9876543210</p>

            <h2>🕒 Working Hours</h2>
            <p>Monday - Saturday</p>
            <p>8:00 AM - 8:00 PM</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="6" placeholder="Write your message..."></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
