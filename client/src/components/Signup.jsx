import { useState } from "react";
import "./signup.css"; // Import your CSS file for styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Full Name
  const [universityID, setUniversityID] = useState(""); // University ID (for students)
  const [contactNumber, setContactNumber] = useState(""); // Contact Number (for students)
  const [loading, setLoading] = useState(false);

  // Role is fixed to "student", so no user input is needed for role
//   const role = "student"; // Force role to "student"

  // Function to validate the SRM AP email address
  const isValidSRMEmail = (email) => {
    return email.endsWith("@srmap.edu.in");
  };

  // Function to validate password strength (you can modify this as per your need)
  const isValidPassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters long
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if the email ends with @srmap.edu.in
    if (!isValidSRMEmail(email)) {
      alert(
        "Only SRM AP email addresses are allowed. Please enter a valid email."
      );
      setLoading(false);
      return;
    }

    // Check password strength
    if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

  };

  return (
    <div className="signup-container">
      {/* SRM logo at the top-left corner */}
      <img
        src="https://srmap.edu.in/file/2019/12/Logo-2.png" // Replace with your SRM logo URL
        alt="SRM University Logo"
        className="logo"
      />

      {/* Left section for avatar */}
      <div className="left-section">
        <img
          src="https://srmap.edu.in/wp-content/uploads/2024/04/srmap-paari.jpg" // Replace with your image URL
          alt="University Building"
          className="avatar"
        />
      </div>

      {/* Right section for signup form */}
      <div className="right-section">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Create Account</h2>

          {/* Student Input Fields */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="University Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="University ID"
            value={universityID}
            onChange={(e) => setUniversityID(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Signup Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Submit"}
          </button>
        </form>
      </div>

      <footer>© IntellectNest 2024</footer>
    </div>
  );
};

export default Signup;