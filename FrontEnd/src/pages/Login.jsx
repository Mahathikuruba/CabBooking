import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>

        <p>Login to continue booking your ride.</p>

        <form>
          <input type="email" placeholder="Enter your email" />

          <input type="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
