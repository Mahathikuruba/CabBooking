import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 🚖</h2>

        <p>Join UCab and start booking rides.</p>

        <form>
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <input type="password" placeholder="Password" />

          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
