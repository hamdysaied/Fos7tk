import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../App.css";
function EventsPage() {
  const [events, setEvents] = useState([]);
  const [, setSelectedEvent] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Fetch events data (for simplicity, using hardcoded data for now)
    const fetchedEvents = [
      {
        name: "Pyramid Light Show",
        description: "Experience the amazing light show at the Great Pyramid of Giza.",
        image: "/images/sound-and-light2.jpg",
        date: "2025-01-15",
        price: "$50",
        location: "Great Pyramid of Giza, Giza",
        time: "6:00 PM"
      },
      {
        name: "Nile River Cruise",
        description: "Enjoy a luxurious cruise along the Nile River with stunning views.",
        image: "/images/Nile-Cruise-Aswan-to-Luxor-Egypt.jpg",
        date: "2025-01-20",
        price: "$100",
        location: "Nile River, Aswan to Luxor",
        time: "9:00 AM"
      },
      {
        name: "Opera Egyptian Omar Khayrat",
        description: "Watch an exclusive performance by the famous Egyptian composer and musician Omar Khayrat.",
        image: "/images/opera.jpg",
        date: "2025-02-10",
        price: "$70",
        location: "Cairo Opera House, Cairo",
        time: "8:00 PM"
      },
      {
        name: "Pharaohs Egypt Events",
        description: "Explore events celebrating Egypt's ancient history and culture, including exhibitions and performances.",
        image: "/images/ancient.png",
        date: "2025-03-05",
        price: "$30",
        location: "Various Locations in Egypt",
        time: "Various times"
      },
      {
        name: "Luxor Temple Tour",
        description: "A guided tour of the Luxor Temple, showcasing the beauty and grandeur of ancient Egyptian architecture.",
        image: "/images/luxor-temple.jpg",
        date: "2025-04-15",
        price: "$60",
        location: "Luxor Temple, Luxor",
        time: "10:00 AM"
      },
      {
        name: "Cairo Opera House Concert",
        description: "Cairo Opera House Presents Moscow Ballet for Eight Spectacular Shows.",
        image: "/images/cairo-opera.jpg",
        date: "2025-05-01",
        price: "$90",
        location: "Cairo Opera House, Cairo",
        time: "7:00 PM"
      },
      {
        name: "Festival Promoting Tourism Across Egypt",
        description: "Sharm El Sheikh to Host Festival Promoting Tourism Across Egypt.",
        image: "/images/sharmevent.jpg",
        date: "2025-06-05",
        price: "$40",
        location: "Sharm El Sheikh, Egypt",
        time: "12:00 PM"
      },
      {
        name: "El Gouna Street Festival",
        description: "El Gouna never fails to bring a fresh supply of entertainment with a vibrant street festival.",
        image: "/images/events-in-el-gouna.jpg",
        date: "2025-07-10",
        price: "$20",
        location: "El Gouna, Red Sea",
        time: "4:00 PM"
      },
    ];

    // Display all events (no date filtering)
    setEvents(fetchedEvents);
  }, []);

  const handleBookNowClick = (event) => {
  if (event) {
    setSelectedEvent(event); // Set selected event data
    navigate("/payment", { state: { event: event } });
  }
};




 
 

  return (
    <section id="events" className="py-5 bg-light mt-5">
      <div className="container text-center">
        <h2>Upcoming Events in Egypt</h2>
        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-md-4 d-flex" key={index}>
              <div className="card flex-fill">
                <img src={event.image} className="card-img-top" alt={event.name} />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text"><strong>Date:</strong> {event.date}</p>
                  <button className="custom-btn" onClick={() => handleBookNowClick(event)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPage;
