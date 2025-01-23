import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Assuming react-icons is installed

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white text-center py-3">
      <p>© 2025 Egypt Tours. All Rights Reserved.</p>
      <div>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" // Added rel attribute
          className="btn btn-link text-white"
        >
          <FaFacebook size={30} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" // Added rel attribute
          className="btn btn-link text-white"
        >
          <FaTwitter size={30} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" // Added rel attribute
          className="btn btn-link text-white"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
