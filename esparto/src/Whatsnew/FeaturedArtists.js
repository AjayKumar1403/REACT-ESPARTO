import React from 'react';
import './FeaturedArtists.css'; // Import the CSS file for FeaturedArtistsComponent

const artistsData = [
  {
    name: 'Vincent van Gogh',
    bio: 'Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.',
    imageUrl: 'artist1.jpeg',
  },
  {
    name: 'Leonardo da Vinci',
    bio: 'Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.',
    imageUrl: 'artist2.jpeg',
  },
  {
    name: 'Pablo Picasso',
    bio: 'Spanish painter, sculptor, printmaker, ceramicist, and stage designer who spent most of his adult life in France.',
    imageUrl: 'artist3.jpeg',
  },
  {
    name: 'Claude Monet',
    bio: 'French painter and a founder of the Impressionist movement in France.',
    imageUrl: 'artist4.jpeg',
  },
  // Add more artist objects as needed
];

const FeaturedArtists = () => {
  return (
    <div className="featured-artists-container">
      <h2>Featured Artists</h2>
      <div className="artists-list">
        {artistsData.map((artist, index) => (
          <div className="artist-item" key={index}>
           
            <h3>{artist.name}</h3>
            <p>{artist.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtists;