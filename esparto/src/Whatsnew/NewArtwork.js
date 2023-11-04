import React from 'react';
import './NewArtworks.css'; // Import the CSS file for NewArtworksComponent

const artworksData = [
    // Add artwork objects as needed
  { title: 'Artwork 1', artist: 'Artist 1', imageUrl: 'img2.jpg' },
  { title: 'Artwork 2', artist: 'Artist 2', imageUrl: 'img3.jpg' },
  { title: 'Artwork 3', artist: 'Artist 3', imageUrl: 'img5.jpg' },
];

const NewArtworks = () => {
  return (
    <div className="new-artworks-container">
      <h2>New Artworks</h2>
      <div className="artworks-list">
        {artworksData.map((artwork, index) => (
          <div className="artwork-item" key={index}>
            <img
              src={`/${artwork.imageUrl}`}
              alt={artwork.title}
              className="artwork-image"
            />
            <h3>{artwork.title}</h3>
            <p>By {artwork.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArtworks;