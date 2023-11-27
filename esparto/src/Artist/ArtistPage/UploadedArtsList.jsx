// UploadedArtsList.js
import React from 'react';
import './style.css'; // Import the CSS file

const UploadedArtsList = ({ uploadedArts }) => {
  return (
    <div className="uploaded-arts-list">
      <h2>Uploaded Arts</h2>
      <ul>
        {uploadedArts.map((art) => (
          <li key={art.id}>
            <img src={art.image} alt={art.title} />
            <div>
              <p className="art-title">{art.title}</p>
              <p className="art-description">{art.description}</p>
              <p className="base-price">Base Price: ${art.basePrice}</p>
              <button className="view-bidders-button">View Bidders</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadedArtsList;
