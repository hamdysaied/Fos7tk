import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Fake signup logic (No backend interaction)
    if (email && password && firstName && lastName && username) {
      // Store user data in localStorage (optional)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ firstName, lastName, username, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      setSuccess(true);
      setError("");

      // Clear form fields
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");

      // Redirect to login page after successful registration
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setError("All fields are required.");
      setSuccess(false);
    }
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "80vh" }}>
      <div className="container my-5 flex-grow-1 d-flex justify-content-center">
        <div className="login-box">
          <h2>Sign Up</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              Signup successful! Redirecting to login page...
            </div>
          )}
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
          <div className="mt-3 text-center">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-1 mt-auto"></footer>
    </div>
  );
}

export default SignUp;
