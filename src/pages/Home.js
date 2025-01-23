import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel"; // Install Bootstrap for carousel
import { FaStar } from "react-icons/fa"; // For star ratings
import { FaUser, FaUserAlt } from "react-icons/fa"; // For user icons
import { Modal } from 'react-bootstrap'; // Import Modal from Bootstrap
import { useNavigate } from "react-router-dom";

import "../App.css"

function Home() {


     const [selectedPlan, setSelectedPlan] = useState(null);
     const navigate = useNavigate(); // Add this line
     const [showLoginModal, setShowLoginModal] = useState(false); // To manage login modal visibility
     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    
         




     const famousPlaces = [
        "Great Pyramids of Giza",
        "Luxor Temple",
        "Karnak Temple",
        "Valley of the Kings",
        "Abu Simbel",
        "Alexandria Library",
        "Nile Cruise",
      ];



      const [customJourney, setCustomJourney] = useState({
        budget: "",
        people: "",
        month: "",
        nationality: "",
        hobbies: "",
        places: [],
      });





      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomJourney({ ...customJourney, [name]: value });
      };
    
      const handlePlaceSelection = (place) => {
        setCustomJourney((prev) => ({
          ...prev,
          places: prev.places.includes(place)
            ? prev.places.filter((p) => p !== place)
            : [...prev.places, place],
        }));
      };
    
      const handleGenerateJourney = () => {
        if (!isLoggedIn) {
          setShowLoginModal(true);
        } else {
          navigate("/custom-journey-payment", { state: customJourney });
        }
      };








     const plans = [
        {
          name: "Basic Plan",
          price: 1800,
          description: "Explore the highlights of Egypt in a brief tour.",
          details: "Ideal for individuals or couples, this 3-day journey includes visits to the Great Pyramids of Giza, the Sphinx, and a guided tour of Cairo. Accommodation will be at a 3-star hotel with breakfast included. Suitable for up to 2 people.",
          places: ["Great Pyramids", "Sphinx", "Cairo City Tour"],
          hotel: "Cairo Budget Inn (3-star)",
          period: "3 days, 2 nights",
          dateRange: "From January 15, 2025 to January 17, 2025",
        },
        {
          name: "Standard Plan",
          price: 2500,
          description: "Discover more with visits to the pyramids and the Egyptian Museum.",
          details: "Perfect for families or small groups, this 5-day tour includes visits to the Egyptian Museum, the Pyramids, the Sphinx, and a day trip to Saqqara. Stay in a 4-star hotel with breakfast and dinner included. Suitable for up to 4 people.",
          places: ["Great Pyramids", "Sphinx", "Egyptian Museum", "Saqqara"],
          hotel: "Cairo Comfort Hotel (4-star)",
          period: "5 days, 4 nights",
          dateRange: "From January 20, 2025 to January 24, 2025",
        },
        {
          name: "Premium Plan",
          price: 4000,
          description: "Experience all of Egypt's wonders.",
          details: "A luxurious 7-day adventure covering all major landmarks, including a Nile cruise from Luxor to Aswan. Visit the Pyramids, the Egyptian Museum, Luxor Temple, and the Valley of the Kings. Stay in a 5-star hotel and enjoy a deluxe cruise. Suitable for up to 6 people.",
          places: ["Great Pyramids", "Sphinx", "Egyptian Museum", "Luxor Temple", "Valley of the Kings", "Nile Cruise"],
          hotel: "Nile Grand Palace (5-star) & Deluxe Cruise Ship",
          period: "7 days, 6 nights",
          dateRange: "From January 25, 2025 to January 31, 2025",
        },
      ];
    
      const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
      };
      const handleConfirmBooking = () => {
        if (!isLoggedIn) {
          setShowLoginModal(true); // Show login modal if not logged in
        } else {
          navigate(`/booking/${selectedPlan.name}`, { state: selectedPlan });
        }
      };
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSuccessMessage(
        `Message sent successfully. We will contact you as soon as possible via the email address you entered: ${formData.email}`
      );
      setShowModal(true); // Show modal when message is successfully sent

      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSuccessMessage("Please fill in all fields.");
      setShowModal(true); // Show modal even for error messages
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when the close button is clicked
  };










  
  return (
    <div>
      {/* Image Slider */}
    
    <section id="slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Ensure images fill the container properly
            src="/images/pyramid.jpg"
            alt="Pyramids of Giza"
          />
          <Carousel.Caption>
            <h3>Pyramids of Giza</h3>
            <p>Experience the ancient wonders.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Same adjustment for this image
            src="/images/EgyptianMuseu.jpg"
            alt="Egyptian Museum"
          />
          <Carousel.Caption>
            <h3>Egyptian Museum</h3>
            <p>Discover the treasures of ancient Egypt.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Same height and fit style
            src="/images/Aswan-High-Dam-Egypt-Tours-Portal.jpg"
            alt="Aswan High Dam"
          />
          <Carousel.Caption>
            <h3>Aswan High Dam</h3>
            <p>Marvel at modern engineering.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Adjusting all images to the same height
            src="/images/Queen-Hatshepsut.jpg"
            alt="Queen Hatshepsut"
          />
          <Carousel.Caption>
            <h3>Queen Hatshepsut</h3>
            <p>Explore the legacy of one of Egypt's most powerful female pharaohs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Ensuring proper fit and full content display
            src="/images/ramses.png"
            alt="Ramses II"
          />
          <Carousel.Caption>
            <h3>Ramses II</h3>
            <p>Discover the grandeur of the most famous pharaoh of Egypt.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "660px", objectFit: "cover" }} // Ensuring all images fill the container properly
            src="/images/Tower-of-Cairo.jpg"
            alt="Tower of Cairo"
          />
          <Carousel.Caption>
            <h3>Cairo Tower</h3>
            <p>Experience breathtaking views of Cairo from the top of the tower.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
      {/* Subscription Plans */}
      <section id="plans" className="py-5 bg-light mt-5">
      <div className="container text-center">
        <h2>Tourist Plans</h2>
        <p>Choose a plan that suits you best.</p>
        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{plan.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">${plan.price}</h6>
                  <p className="card-text">{plan.description}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handlePlanClick(plan)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedPlan.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedPlan(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <h6>Price: ${selectedPlan.price}</h6>
                  <p>{selectedPlan.details}</p>
                  <ul>
                    <li><strong>Places to Visit:</strong> {selectedPlan.places.join(", ")}</li>
                    <li><strong>Hotel:</strong> {selectedPlan.hotel}</li>
                    <li><strong>Journey Period:</strong> {selectedPlan.period}</li>
                    <li><strong>Date Range:</strong> {selectedPlan.dateRange}</li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedPlan(null)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleConfirmBooking}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login Required</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowLoginModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>You need to log in to book this journey.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowLoginModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate("/login")}
                  >
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>








    <section id="custom-journey" className="py-5 bg-light mt-5">
  <div className="container">
    <div className="text-center mb-4">
      <h2>Create Your Custom Journey</h2>
      <p>Plan a personalized trip to suit your preferences!</p>
    </div>
    <form className="p-4 shadow-sm rounded bg-white">
      <div className="row gy-3 gx-4">
        {/* Budget */}
        <div className="col-md-6 col-lg-4">
          <label htmlFor="budget" className="form-label">
            Budget ($)
          </label>
          <input
            type="number"
            id="budget"
            className="form-control"
            name="budget"
            value={customJourney.budget}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Number of People */}
        <div className="col-md-6 col-lg-4">
          <label htmlFor="people" className="form-label">
            Number of People
          </label>
          <input
            type="number"
            id="people"
            className="form-control"
            name="people"
            value={customJourney.people}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Month */}
        <div className="col-md-6 col-lg-4">
          <label htmlFor="month" className="form-label">
            Month of Journey
          </label>
          <select
            id="month"
            className="form-select"
            name="month"
            value={customJourney.month}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        {/* Nationality */}
        <div className="col-md-6 col-lg-4">
          <label htmlFor="nationality" className="form-label">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            className="form-control"
            name="nationality"
            value={customJourney.nationality}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Hobbies */}
        <div className="col-md-6 col-lg-4">
          <label htmlFor="hobbies" className="form-label">
            Hobbies
          </label>
          <input
            type="text"
            id="hobbies"
            className="form-control"
            name="hobbies"
            value={customJourney.hobbies}
            onChange={handleInputChange}
          />
        </div>

        {/* Places to Visit */}
        <div className="col-12">
          <label className="form-label">Places to Visit</label>
          <div className="row gx-4">
            {famousPlaces.map((place) => (
              <div className="col-md-4" key={place}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={place}
                    value={place}
                    checked={customJourney.places.includes(place)}
                    onChange={() => handlePlaceSelection(place)}
                  />
                  <label className="form-check-label" htmlFor={place}>
                    {place}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-success px-4 py-2"
          onClick={handleGenerateJourney}
        >
          Create Journey Plan
        </button>
      </div>
    </form>
  </div>
</section>

{/* Login Modal */}
{showLoginModal && (
  <div
    className="modal fade show"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    tabIndex="-1"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Login Required</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowLoginModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <p>You need to log in to create a custom journey.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowLoginModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login Now
          </button>
        </div>
      </div>
    </div>
  </div>
)}



      {/* Contact Us */}



      <section id="contact" className="py-5">
        <div className="container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Bootstrap Modal for Success/Error Message */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Message Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>


      {/* About Us */}
      <section id="about" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">About Us</h2>
    <div className="row">
      {/* Description Card */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">Our Journey</h5>
            <p className="card-text">
              Egypt Tours offers a one-of-a-kind journey to experience the timeless beauty of Egypt. From the iconic Pyramids of Giza to the serene Nile River, the majestic temples of Luxor and Karnak, the vibrant markets of Cairo, and the stunning beaches of the Red Sea, we take you on a voyage through Egypt's rich history and diverse culture. Our goal is to provide an adventure that leaves every traveler with unforgettable memories.
            </p>
          </div>
        </div>
      </div>

      {/* Services Card */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">Our Services</h5>
            <p className="card-text">
              We pride ourselves on creating customized travel experiences tailored to your interests and budget. Whether you want to explore ancient temples, sail the Nile on a luxurious cruise, dive into the underwater world of the Red Sea, or immerse yourself in Egypt’s vibrant local culture, we’ve got you covered. From crafting detailed itineraries to booking hotels and guided tours, we ensure your trip to Egypt is seamless and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




 

      {/* Reviews Section */}
      <section id="reviews" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Tourists Say</h2>
          <div className="row">
            {/* Review 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaUserAlt size={40} className="me-3" />
                    <div>
                      <h6 className="card-title">Emily Johnson</h6>
                      <div className="d-flex">
                        {/* Star Ratings */}
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                      </div>
                    </div>
                  </div>
                  <p className="card-text">
                    "My experience with Egypt Tours was unforgettable! The itinerary was well planned, and the service was outstanding. Highly recommended!"
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaUser size={40} className="me-3" />
                    <div>
                      <h6 className="card-title">John Smith</h6>
                      <div className="d-flex">
                        {/* Star Ratings */}
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                      </div>
                    </div>
                  </div>
                  <p className="card-text">
                    "The tour guide was amazing and very knowledgeable. The trip exceeded my expectations, and I can't wait to come back!"
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <FaUserAlt size={40} className="me-3" />
                    <div>
                      <h6 className="card-title">Sarah Lee</h6>
                      <div className="d-flex">
                        {/* Star Ratings */}
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                      </div>
                    </div>
                  </div>
                  <p className="card-text">
                    "I had a wonderful time in Egypt, and this tour company made everything easy. The planning and arrangements were perfect!"
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
          <div className="d-flex align-items-center mb-3">
                    <FaUserAlt size={40} className="me-3" />
                    <div>
                <h6 className="card-title">Anna Brown</h6>
                <div className="d-flex">
                  {/* Star Ratings */}
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                </div>
              </div>
            </div>
            <p className="card-text">
              "The tour was incredible! Everything from the sights to the guides was fantastic. I highly recommend Egypt Tours for anyone looking to explore Egypt!"
            </p>
          </div>
        </div>
      </div>

      {/* Review 5 - New Review with Image */}
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
          <div className="d-flex align-items-center mb-3">
                    <FaUserAlt size={40} className="me-3" />
                    <div>
                <h6 className="card-title">James Wilson</h6>
                <div className="d-flex">
                  {/* Star Ratings */}
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                  <FaStar color="#FFD700" />
                </div>
              </div>
            </div>
            <p className="card-text">
              "I had an amazing time in Egypt. The organization of the tour was top-notch, and I loved every moment. I will definitely book again!"
            </p>
          </div>
        </div>
      </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
