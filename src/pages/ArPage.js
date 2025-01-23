import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ARPage() {
  const navigate = useNavigate();

  const markers = [
    {
      name: "Ramses II",
      src: "/markers/ramses.png",
      details:
        "Ramses II, also known as Ramses the Great, was the third pharaoh of the Nineteenth Dynasty of Egypt. He is often regarded as Egypt's most powerful and celebrated pharaoh.",
      location: "The Great Temple of Abu Simbel, Nubia, Egypt",
      image: "/images/ramses.jpg",
      voice: "/Voice/v-ram.mp3",
      voice2: "/Voice/v-ram2.mp3",
      video: "/video/ram.mp4",
     
    },
    {
      name: "Pyramids",
      src: "/markers/pyramids.png",
      details:
        "The Pyramids of Giza are ancient pyramid structures built as tombs for Egypt's Pharaohs. They are one of the Seven Wonders of the Ancient World.",
      location: "Giza Plateau, Giza, Egypt",
      image: "/images/pyramids.jpg",
      voice: "/Voice/v-pra.mp3",
      voice2: "/Voice/v-pra2.mp3",
      video: "/video/pyramids.mp4",
    },
    {
      name: "Nefertiti",
      src: "/markers/nefertiti.png",
      details:
        "Queen Nefertiti was the Great Royal Wife of Pharaoh Akhenaten. She is known for her iconic bust, a symbol of ancient Egyptian beauty.",
      location: "The Neues Museum, Berlin, Germany (Bust)",
      image: "/images/nefertiti.jpg",
      voice: "/Voice/v-nef.mp3",
      voice2: "/Voice/v-nef2.mp3",
      video: "/video/nef.mp4",
    },
    {
      name: "Hatshepsut",
      src: "/markers/hatshepsut.png",
      details:
        "Hatshepsut was one of the most successful female pharaohs in ancient Egypt. She is known for her remarkable temple at Deir el-Bahari.",
      location: "Deir el-Bahari, Luxor, Egypt",
      image: "/images/hatshepsut.jpg",
      voice: "/Voice/v-hat.mp3",
      voice2: "/Voice/v-hat2.mp3",
      video: "/video/Hat.mp4",
    },
    {
      name: "Ancient Kings",
      src: "/markers/kings.png",
      details:
        "The Valley of the Kings is a burial site for pharaohs and powerful nobles. It houses tombs with elaborate paintings and treasures.",
      location: "Valley of the Kings, Luxor, Egypt",
      image: "/images/kings.jpg",
      voice: "/Voice/v-anc.mp3",
      voice2: "/Voice/v-anc2.mp3",
      video: "/video/kings.mp4",
    },
    {
      name: "Anubis",
      src: "/markers/anubis.png",
      details:
        "Anubis is the ancient Egyptian god associated with mummification and the afterlife. He is depicted as a jackal or a man with a jackal head.",
      location: "Various sites across Egypt",
      image: "/images/anubis.jpg",
      voice: "/Voice/v-anu.mp3",
      voice2: "/Voice/v-anu2.mp3",
      video: "/video/anu.mp4",
    },
  ];

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [audio, setAudio] = useState(null);
  const [video, setVideo] = useState(null);

  const handleScan = (marker) => {
    setSelectedMarker(marker);
    setSelectedOption(null);
    if (audio) audio.pause();
    setAudio(null);
    if (video) video.pause();
    setVideo(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const playAudio = (voice) => {
    if (audio) audio.pause();
    const newAudio = new Audio(voice);
    newAudio.play();
    setAudio(newAudio);
  };

  const playVideo = (videoSrc) => {
    if (video) video.pause();
    if (!videoSrc) {
      alert("No video available for this marker.");
      return;
    }
    const newVideo = document.createElement("video");
    newVideo.src = videoSrc;
    newVideo.controls = true;
    document.body.appendChild(newVideo);
    newVideo.play();
    setVideo(newVideo);
  };

  return (
    <div className="ar-page container py-5">
      <h1 className="text-center">Scan to Discover Ancient Egypt</h1>
      <div className="qr-codes-container row mt-4">
        {markers.map((marker, index) => (
          <div
            key={index}
            className="col-md-4 text-center mb-4"
            onClick={() => handleScan(marker)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={marker.src}
              alt={marker.name}
              className="qr-code img-fluid rounded"
              style={{ maxHeight: "150px" }}
            />
            <p className="mt-2">{marker.name}</p>
          </div>
        ))}
      </div>

      {selectedMarker && !selectedOption && (
        <div className="options-container d-flex justify-content-between align-items-center mt-5">
          <div className="marker-info">
            <img
              src={selectedMarker.image}
              alt={selectedMarker.name}
              className="img-fluid rounded"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2 className="mb-3">Select an Option</h2>
            <div className="d-flex flex-row justify-content-center gap-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOptionSelect("text")}
              >
                Text
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOptionSelect("audio")}
              >
                Audio
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOptionSelect("video")}
              >
                Video
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleOptionSelect("ar")}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedOption === "text" && selectedMarker && (
        <div className="marker-details card p-4 shadow-lg mt-5">
          <h2 className="text-center mb-3">{selectedMarker.name}</h2>
          <img
            src={selectedMarker.image}
            alt={selectedMarker.name}
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <p><strong>Details:</strong> {selectedMarker.details}</p>
          <p><strong>Location:</strong> {selectedMarker.location}</p>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={() => setSelectedMarker(null)}
          >
            Close
          </button>
        </div>
      )}

      {selectedOption === "audio" && selectedMarker && (
        <div className="marker-details card p-4 shadow-lg mt-5">
          <h2 className="text-center mb-3">{selectedMarker.name}</h2>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={() => playAudio(selectedMarker.voice)}
          >
            Arabic
          </button>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={() => playAudio(selectedMarker.voice2)}
          >
            English
          </button>
          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={() => setSelectedMarker(null)}
          >
            Close
          </button>
        </div>
      )}

      {selectedOption === "video" && selectedMarker && (
          <div className="marker-details card p-4 shadow-lg mt-5">
          <h2 className="text-center mb-3">{selectedMarker.name}</h2>
          <video
          className="w-100"
          controls
          autoPlay
          src={selectedMarker.video}
          />
        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={() => setSelectedMarker(null)}
        >
          Close
        </button>
      </div>
       )}
      {selectedOption === "ar" && selectedMarker && (
              <div className="marker-details card p-4 shadow-lg mt-5">
                <h2 className="text-center mb-3">Welcome to the Virtual Reality Experience!</h2>
                <img
                  src="./images/AR.jpg"
                  alt={selectedMarker.name}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "600px", objectFit: "cover" }}
                />
                <p><strong>Details:</strong> Look around to interact with the environment.</p>
                <p>Move closer to objects for a better view.</p>
                <p>Enjoy the effects and discover new virtual objects.</p>
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={() => setSelectedMarker(null)}
                >
                  Book
                </button>
                <button
                  className="btn btn-secondary w-100 mt-3"
                  onClick={() => setSelectedMarker(null)}
                >
                  Close
                </button>
              </div>
            )}
    </div>
  );
} 


export default ARPage;
