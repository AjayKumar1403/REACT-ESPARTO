import React from 'react';
import './Whatsnew.css'; // Import the CSS file for WhatsNewComponent

const WhatsNewComponent = () => {
  return (
    <div className="whats-new-container">
      <h2>What's New</h2>
      <div className="whats-new-content">
        {/* //Vishnu */}
        <div className="whats-new-item">
          <h3>Featured Artists</h3>
          <p>
            Meet the artists behind the masterpieces and discover their unique
            styles and techniques.
          </p>
        </div>
        {/* //Thella */}
        {/* Add more items related to new features or updates */}
      </div>
    </div>
  );
};

export default WhatsNewComponent;
