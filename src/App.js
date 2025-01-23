import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SignUp from "./pages/SignUp";
import EventsPage from "./pages/EventsPage";
import PaymentPage from "./pages/PaymentPage";
import ARPage from "./pages/ArPage";
import Booking from "./pages/Booking";
import CustomJourneyPayment from "./pages/CustomJourneyPayment";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={isLoggedIn ? <Home /> : <SignUp />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ar-page" element={<ARPage />} />
        <Route path="/booking/:planName" element={<Booking />} />
        <Route path="/custom-journey-payment" element={<CustomJourneyPayment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
