import React from 'react';
import './Collection.css';

const sculpturesData = [
  {
    id: 1,
    title: 'Cuore Pedestal Stone',
    artist: 'Richard Erdman',
    price: '$2190',
    description: 'Lovely sculpture in Carrara marble in the Richard Erdman Piccolo series. A wonderful way to begin collecting Erdman.!',
    imageUrl: 'sculp1.jpg', // Add the URL to the painting image
  },
  {
    id: 2,
    title: 'Notched Wave',
    artist: 'Archie Held',
    price: '$7050',
    description: 'This is in stainless steel and bronze offers a slick vertical water sculpture for a contemporary setting indoors or outdoors. It is water containment.',
    imageUrl: 'sculp2.jpg', // Add the URL to the painting image
  },
  {
    id: 3,
    title: 'Murmur',
    artist: 'Ivan McLean',
    price: '$6750',
    description: 'The 4 elements of this sculpture in powder coated stainless steel are able to be turned individually, thus offering many different variations.',
    imageUrl: 'sculp3.jpg', // Add the URL to the painting image
  },
  {
    id: 4,
    title: 'Spinning to Sagittarius',
    artist: 'Jeff Glode Wise',
    price: '$11,590',
    description: 'This stunning kinetic sculpture is made of welded and powder-coated steel with paint, concrete and has a base made of cast iron antique man-hole covers. It catches the slightest breeze!',
    imageUrl: 'sculp4.jpg', // Add the URL to the painting image
  },
  {
    id: 5,
    title: 'Blue Figure',
    artist: 'Mark Chatterley',
    price: '$12,230',
    description: 'Just like beauty, ceramic coating will eventually wear off, so you will need to have it reapplied every few years and it will steal your hearts.',
    imageUrl: 'sculp5.jpg', // Add the URL to the painting image
  },
  {
    id: 6,
    title: 'Multi-col Composition',
    artist: 'Michael Gustavson',
    price: '$5,450',
    description: 'This is part of the lively series of ceramic sculptural benches brought to life while sculptor masterfully detailed and gorgeously textured glazes in a variety of colors. The two coordinating ceramic elements form a functional bench. Delightful Memory can be installed indoors as a unique home accent/placed outdoors in temperate climates as a colorful garden bench.',
    imageUrl: 'sculpt6.jpg', // Add the URL to the painting image
  },
  {
    id: 7,
    title: 'Shelter',
    artist: 'Nina Lyons',
    price: '$15845',
    description: 'This consists of an installation of three building shapes and a figure on a staircase. Evoking landscape, environment, and our connection with nature and place, the piece reveals the artist’s affinity for the clay that comes from the earth and the peaceful feeling provided by our homes.',
    imageUrl: 'sculp7.jpg', // Add the URL to the painting image
  },
  {
    id: 8,
    title: 'Red Sphere',
    artist: 'Mckinney Reynolds',
    price: '$18445',
    description: 'With every point on its surface equidistant from its centered area of activity, interest, or expertiseOn. This attracts you well.',
    imageUrl: 'sculpt8.jpg', // Add the URL to the painting image
  }  
];

const Sculptures = () => {
  return (
    <>
      <h1>Sculptures</h1>
      <div className="paintings-container">
        {sculpturesData.map((sculpture) => (
          <div key={sculpture.id} className="painting-card">
            <img
              src={sculpture.imageUrl}
              alt={sculpture.title}
              className="painting-image"
            />
            <h2>{sculpture.title}</h2>
            <p>Artist: {sculpture.artist}</p>
            <p>Description: {sculpture.description}</p>
            <p>Price: {sculpture.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sculptures;
