import "../styles/Contact.css";
import { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", contactData);

      alert("Message sent successfully!");

      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactData.email}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={contactData.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
