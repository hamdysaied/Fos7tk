import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const selectedPlan = location.state;

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", { ...selectedPlan, ...paymentInfo });
    alert("Your booking has been confirmed!");
    // Here, you can send the booking data to the server.
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Complete Your Booking</h2>
      <div className="card">
        <div className="card-header">
          <h5>{selectedPlan.name}</h5>
        </div>
        <div className="card-body">
          <h6>Details</h6>
          <p><strong>Price:</strong> ${selectedPlan.price}</p>
          <p><strong>Journey Period:</strong> {selectedPlan.period}</p>
          <p><strong>Places:</strong> {selectedPlan.places.join(", ")}</p>
          <p><strong>Hotel:</strong> {selectedPlan.hotel}</p>
        </div>
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <h6>Payment Details</h6>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              value={paymentInfo.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Additional Comments (Optional)</label>
          <textarea
            className="form-control"
            id="comments"
            rows="3"
            value={paymentInfo.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit Booking</button>
      </form>
    </div>
  );
}

export default Booking;
