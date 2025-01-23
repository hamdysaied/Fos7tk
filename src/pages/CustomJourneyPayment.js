import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CustomJourneyPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const journeyDetails = location.state;

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Redirect if no details are provided
  if (!journeyDetails) {
    navigate("/");
    return null;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [id]: value,
    });
  };

  const handlePaymentSubmit = () => {
    // Validate card information (basic check)
    const { cardNumber, cardHolder, expiryDate, cvv } = paymentDetails;
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert("Please fill in all payment details.");
      return;
    }

    // Simulate payment process
    setPaymentSuccess(true);
  };

  const hotel = journeyDetails.budget >= 3000 ? "5-Star Hotel" : "4-Star Hotel";

  return (
    <div className="container my-5">
      <h2>Confirm Your Custom Journey</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Journey Details</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Budget:</strong> ${journeyDetails.budget}
            </li>
            <li className="list-group-item">
              <strong>Number of People:</strong> {journeyDetails.people}
            </li>
            <li className="list-group-item">
              <strong>Month:</strong> {journeyDetails.month}
            </li>
            <li className="list-group-item">
              <strong>Nationality:</strong> {journeyDetails.nationality}
            </li>
            <li className="list-group-item">
              <strong>Hobbies:</strong> {journeyDetails.hobbies || "None"}
            </li>
            <li className="list-group-item">
              <strong>Places to Visit:</strong> {journeyDetails.places.join(", ") || "None"}
            </li>
            <li className="list-group-item">
              <strong>Hotel:</strong> {hotel}
            </li>
          </ul>
          <div className="mt-4">
            <h5>Payment Details</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="form-control"
                  value={paymentDetails.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardHolder" className="form-label">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardHolder"
                  className="form-control"
                  value={paymentDetails.cardHolder}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="form-control"
                  value={paymentDetails.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={handlePaymentSubmit}
              >
                Submit & Confirm Payment
              </button>
            </form>
          </div>
        </div>
      </div>

      {paymentSuccess && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Payment Successful</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setPaymentSuccess(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Your custom journey has been successfully created!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomJourneyPayment;
