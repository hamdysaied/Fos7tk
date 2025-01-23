import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate for programmatic navigation
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const loginStatus = localStorage.getItem("isLoggedIn");
    const storedUsername = localStorage.getItem("username");

    if (loginStatus === "true") {
      setIsLoggedIn(true);
      setUsername(storedUsername); // Set the username for the welcome message
    }
  }, []);

  const handleLogout = () => {
    // Remove login state and user information from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("authToken"); // Remove token if stored
    localStorage.removeItem("user"); // Remove entire user object if stored

    setIsLoggedIn(false);

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white rounded-3 shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Fos7tk
        </Link>
        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#plans">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#reviews">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ar-page">
                ARPage
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Upcoming Events
              </Link>
            </li>
          </ul>
          {/* User Actions */}
          <div className="ms-auto">
            {isLoggedIn ? (
              <>
                <span className="navbar-text">Welcome back, {username}!</span>
                <button className="btn btn-danger ms-3" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
