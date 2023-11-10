import React from 'react';
import './Collection.css';

const paintingsData = [
  {
    id: 1,
    title: 'Painting 1',
    artist: 'Artist 1',
    price: '$100',
    description: 'Description for painting 1.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 2,
    title: 'Painting 2',
    artist: 'Artist 2',
    price: '$200',
    description: 'Description for painting 2.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 3,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 3.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 4,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 4.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 5,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 5.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 1,
    title: 'Painting 1',
    artist: 'Artist 1',
    price: '$100',
    description: 'Description for painting 1.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 2,
    title: 'Painting 2',
    artist: 'Artist 2',
    price: '$200',
    description: 'Description for painting 2.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 3,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 3.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 4,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 4.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  {
    id: 5,
    title: 'Painting 3',
    artist: 'Artist 3',
    price: '$150',
    description: 'Description for painting 5.',
    imageUrl: 'img2.jpg', // Add the URL to the painting image
  },
  // Add more paintings as needed
];

const Paintings = () => {
  return (
    <>
      <h1>Paintings</h1>
      <div className="paintings-container">
        {paintingsData.map((painting) => (
          <div key={painting.id} className="painting-card">
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className="painting-image"
            />
            <h2>{painting.title}</h2>
            <p>Artist: {painting.artist}</p>
            <p>Description: {painting.description}</p>
            <p>Price: {painting.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Paintings;
