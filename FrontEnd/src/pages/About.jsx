import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>🚖 About UCab</h1>

        <p className="about-intro">
          UCab is a Smart Campus Transportation System designed to provide
          students, faculty, and staff with a safe, affordable, and convenient
          ride-booking experience. Our goal is to simplify campus travel by
          offering quick booking, transparent pricing, and reliable
          transportation.
        </p>
        <div className="mission-vision">
          <div className="mission-card">
            <h2>🎯 Our Mission</h2>

            <p>
              To provide safe, affordable, and reliable transportation for
              students, faculty, and staff through an intelligent campus
              ride-booking platform.
            </p>
          </div>

          <div className="vision-card">
            <h2>🚀 Our Vision</h2>

            <p>
              To become the most trusted smart transportation solution for
              educational institutions by integrating modern technologies and
              user-friendly services.
            </p>
          </div>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <h3>⚡ Quick Booking</h3>
            <p>
              Book your ride within seconds using a simple and user-friendly
              interface.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚗 Multiple Vehicle Options</h3>
            <p>
              Choose from Bike, Mini, Sedan, or SUV according to your travel
              requirements.
            </p>
          </div>

          <div className="feature-card">
            <h3>💰 Affordable Pricing</h3>
            <p>
              Transparent pricing with no hidden charges, specially designed for
              students.
            </p>
          </div>

          <div className="feature-card">
            <h3>📍 Smart Recommendations</h3>
            <p>
              UCab recommends the most suitable vehicle based on the number of
              passengers.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Login</h3>
            <p>
              User authentication is secured using JWT to protect personal
              information.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Booking History</h3>
            <p>
              Easily view all your previous bookings and ride details from your
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
