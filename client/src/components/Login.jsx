import { useState } from "react";
import "./login.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response);
      const user = await axios.post("http://localhost:3000/api/users/user", {
        email,
      });
      localStorage.setItem("user", JSON.stringify(user.data.user));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
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
          <p className="quote">Please Use Your University email only</p>

          <form className="login-form" onSubmit={handleSubmit}>
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
              {loading ? "Logining" : "Login"}
            </button>
          </form>

          <p>
            Don’t have an account?{" "}
            <span className="signup-link" onClick={()=>navigate("/signup")}>
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;