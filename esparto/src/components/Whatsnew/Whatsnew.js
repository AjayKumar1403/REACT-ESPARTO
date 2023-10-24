import React from 'react';
import './Whatsnew.css'; // Import the CSS file for WhatsNewComponent

const WhatsNewComponent = () => {
  return (
    <div className="whats-new-container">
      <h2>What's New</h2>
      <div className="whats-new-content">
        <div className="whats-new-item">
            <h3>New Artworks</h3>
            <p>
              Explore our latest collection of stunning artworks created by
              talented artists.
            </p>
        </div>
        <div className="whats-new-item">
          <h3>Featured Artists</h3>
          <p>
            Meet the artists behind the masterpieces and discover their unique
            styles and techniques.
          </p>
        </div>
        <div className="whats-new-item">
          <h3>Exciting Features</h3>
          <p>
            Check out our new interactive tools and features designed to enhance
            your art experience.
          </p>
          </div>
        {/* Add more items related to new features or updates */}
      </div>
    </div>
  );
};

export default WhatsNewComponent;
