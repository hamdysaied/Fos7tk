// src/pages/AdminDashboard.js

import React from 'react';
import { FaUser, FaDollarSign, FaGlobe, FaClipboardList } from 'react-icons/fa';

function AdminDashboard() {
  // Placeholder data (to be replaced with dynamic data from the database)
  const mostEnrolledNationality = ""; // e.g., "USA"
  const totalProfitLastMonth = ""; // e.g., "$10,000"
  const mostChosenPlan = ""; // e.g., "Luxury Nile Cruise"
  const totalBookings = ""; // e.g., "120"

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      {/* Statistics Cards */}
      <div className="row g-4">
        {/* Nationality with Most Enrollments */}
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <FaGlobe className="mb-3 text-primary" size={40} />
              <h5 className="card-title">Top Nationality</h5>
              <p className="card-text fs-4">{mostEnrolledNationality || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Total Profit Last Month */}
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <FaDollarSign className="mb-3 text-success" size={40} />
              <h5 className="card-title">Total Profit (Last Month)</h5>
              <p className="card-text fs-4">{totalProfitLastMonth || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Most Chosen Plan */}
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <FaClipboardList className="mb-3 text-warning" size={40} />
              <h5 className="card-title">Most Chosen Plan</h5>
              <p className="card-text fs-4">{mostChosenPlan || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="col-md-6 col-lg-3">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <FaUser className="mb-3 text-info" size={40} />
              <h5 className="card-title">Total Bookings</h5>
              <p className="card-text fs-4">{totalBookings || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for Additional Statistics */}
     
        <div className="mt-5">
  <h2>Additional Statistics</h2>
  <p>Charts, graphs, or other detailed statistics based on the database data.</p>
</div>

{/* Spacer */}
<div style={{ height: "200px" }}></div>
      </div>
 
    
  );
}

export default AdminDashboard;
