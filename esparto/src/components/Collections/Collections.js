import React from 'react';
import './Collections.css'; // Import the CSS file for your component

const CollectionsComponent = () => {
 //Sahithi

  return (
    <div className="collections-container">
      <h2>Our Collections</h2>
      <div className="collections-list">
        {
        collections.map((collection, index) => (
          <div className="collection-item" key={index}>
          <h3>{collection.category}</h3>
          <img
            src={process.env.PUBLIC_URL + `/${collection.image}`}
            alt={`${collection.category}`}
            className="collection-image" // Apply the CSS class for small images
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsComponent;
