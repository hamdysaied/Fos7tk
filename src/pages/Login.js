import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../src/App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if the user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login logic (No backend interaction)
    if (email === "hamdysaied326@gmail.com" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", "Hamdy");

      setSuccess("Login successful! Redirecting to home...");
      setError("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Invalid email or password.");
      setSuccess("");
    }
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "80vh" }}>
      <div className="container my-5 flex-grow-1 d-flex justify-content-center">
        <div className="login-box">
          <h2>Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
