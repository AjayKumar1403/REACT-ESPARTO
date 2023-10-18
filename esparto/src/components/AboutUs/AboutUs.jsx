import React from 'react';
import './AboutUs.css'; // Import your CSS for styling
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="content-section">
        <img src={'./img2.jpg'} alt="Artwork" className="side-image" />
        <div className="text-content">
          <h2>Welcome to Our Art World</h2>
          <p>
            At ESPARTA, we are passionate about art in all its forms. Our
            mission is to celebrate creativity and promote talented artists from
            around the world. With a deep appreciation for diverse artistic
            expressions, we curate a wide range of artworks that inspire, evoke
            emotions, and enrich the soul.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="text-content">
          <h3>Our Vision</h3>
          <p>
            To create a vibrant and inclusive art community, fostering
            connections between artists and art enthusiasts. We aim to make art
            accessible to everyone and provide a platform for artists to
            showcase their talent and passion.
          </p>
        </div>
        <img src={'./img2.jpg'} alt="Artwork" className="side-image" />
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default AboutUs;
