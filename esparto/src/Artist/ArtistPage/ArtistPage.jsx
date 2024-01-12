// ArtistPage.js
import React, { useState } from 'react';
import ArtUploadForm from './ArtUploadForm';
import UploadedArtsList from './UploadedArtsList';
import { Link } from 'react-router-dom';
import './style.css'; // Import the CSS file

const ArtistPage = () => {
  const [uploadedArts, setUploadedArts] = useState([
    {
      id: 1,
      title: 'Artwork 1',
      description: 'Beautiful artwork description 1.',
      basePrice: 100,
      image: '/Drawing3.jpeg',
      bidders: ['Bidder1', 'Bidder2'],
    },
    {
      id: 2,
      title: 'Artwork 2',
      description: 'Amazing artwork description 2.',
      basePrice: 150,
      image: '/Drawing2.jpg',
      bidders: ['Bidder3', 'Bidder4'],
    },
  ]);

  const handleArtUpload = (newArt) => {
    setUploadedArts([
      ...uploadedArts,
      { id: uploadedArts.length + 1, ...newArt, bidders: [] },
    ]);
  };

  return (
    <div className="artist-page">
      <div className="profile-button">
        <Link to={'/userProfile'}>
          <button style={{ marginRight: '10px' }}>Profile</button>
        </Link>
        <Link to={'/'}>
          <button style={{ marginRight: '10px' }}>Home</button>
        </Link>
      </div>

      <ArtUploadForm onArtUpload={handleArtUpload} />

      <UploadedArtsList uploadedArts={uploadedArts} />
    </div>
  );
};

export default ArtistPage;
