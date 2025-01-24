import { useState } from "react";
import "./login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-left">
        {/* SRM Logo */}
        <img
          src="https://srmap.edu.in/file/2019/12/Logo-2.png" // Replace with your SRM logo URL
          alt="SRM University Logo"
          className="logo"
        />
      </div>

      <div className="login-right">
        <div className="login-content">
          <p className="quote">Please Use Your University Id only</p>

          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">
              Login
            </button>
          </form>

          <p>
            Don’t have an account?{" "}
            <span className="signup-link">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;