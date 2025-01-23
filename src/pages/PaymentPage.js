import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css"; // Assuming you still want to use custom styles
import { Modal, Button } from 'react-bootstrap'; // Importing Bootstrap Modal and Button components

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { event } = location.state || {};

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const { cardNumber, expiryDate, cvv, email, mobile } = formData;
    if (cardNumber && expiryDate && cvv && email && mobile) {
      setShowModal(true); // Show success modal
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    navigate("/"); // Navigate to the home page
  };

  if (!event) {
    return <p>No event selected!</p>;
  }

  return (
    <section id="payment" className="py-5 bg-light mt-5">
      <div className="container text-center">
        <h2>Purchase Ticket for {event.name}</h2>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Price:</strong> {event.price}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Time:</strong> {event.time}</p>

        {/* Bootstrap Image resizing */}
        <img
          src={event.image}
          alt={event.name}
          className="img-fluid mb-3"
          style={{ maxHeight: "300px", objectFit: "cover" }} // To keep the image within a specific size
        />

        <h3>Payment Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="form-control"
                  placeholder="Enter your card number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="form-control"
                  placeholder="Enter CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">Submit Payment</button>
        </form>
      </div>

      {/* Modal for success */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your booking for {event.name} has been successfully completed!</p>
          <p>We will send you all the details via the mobile number and email you entered.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default PaymentPage;
