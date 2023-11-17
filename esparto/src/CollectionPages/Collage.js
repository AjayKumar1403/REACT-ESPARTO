import React from 'react';
import './Collection.css';

const collageData = [
  {
    id: 1,
    title: 'Definition of life',
    artist: 'Ranbir Kapoor',
    price: '$100',
    description: 'This collage gives the viewer, a motivation. It underlines a few proverbs useful for personality development.',
    imageUrl: 'esparto/public/collage1.jpg', // Add the URL to the collage image
  },
  {
    id: 2,
    title: 'Good vibes',
    artist: 'Varun Tej',
    price: '$230',
    description: 'Every new day is a new beginning. One has to choose his circle.',
    imageUrl: 'esparto/public/collage2.png', // Add the URL to the collage image
  },
  {
    id: 3,
    title: 'Memories',
    artist: 'Genelia',
    price: '$2099',
    description: 'This collage gives a snapshot of events in a trip. By seeing it, one can revisit the memory lane from his previous trips. It gives a fresh start to any day!',
    imageUrl: 'esparto/public/collage3.png', // Add the URL to the collage image
  },
  {
    id: 4,
    title: 'Aquarius',
    artist: 'Rohit Sharma',
    price: '$9825',
    description: 'A collage with characteristic features of an aquarius.',
    imageUrl: 'esparto/public/collage4.jpg', // Add the URL to the collage image
  },
  {
    id: 5,
    title: 'Cosmic connection',
    artist: 'Sushant Singh Rajput',
    price: '$12675',
    description: 'The sky is the most beautiful place. The stars and the planets have a lot of secrets.',
    imageUrl: 'esparto/public/collage5.jpg', // Add the URL to the collage image
  },
  {
    id: 6,
    title: 'Interests of Aquarius',
    artist: 'Dexter Morgan',
    price: '$3995',
    description: 'As a part of my day-to-day observation, I made a collage of a few interests of an Aquarius.',
    imageUrl: 'esparto/public/collage6.jpg', // Add the URL to the collage image
  }
];

const collage = () => {
  return (
    <>
      <h1>collage</h1>
      <div className="collage-container">
        {collageData.map((collage) => (
          <div key={collage.id} className="collage-card">
            <img
              src={collage.imageUrl}
              alt={collage.title}
              className="collage-image"
            />
            <h2>{collage.title}</h2>
            <p>Artist: {collage.artist}</p>
            <p>Description: {collage.description}</p>
            <p>Price: {collage.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default collage;
