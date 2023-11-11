import React from 'react';
import './Collection.css';

const paintingsData = [
  {
    id: 1,
    title: 'Ski Chalet Austria',
    artist: 'Elizabeth Parker',
    price: '$290',
    description: 'This painting was executed with the use of a live camera overlooking a ski chalet, Austria.',
    imageUrl: 'painting07.png', // Add the URL to the painting image
  },
  {
    id: 2,
    title: 'Young Blue Moon',
    artist: 'Kevin Gray',
    price: '$7050',
    description: 'Whenever I try to take a photo of the moon with my phone it only looks like a little smudge.',
    imageUrl: 'painting08.png', // Add the URL to the painting image
  },
  {
    id: 3,
    title: 'Nectar',
    artist: 'Muriel napoli',
    price: '$5650',
    description: 'What is found in my paintings is natures ability to change independently of the action of humanity, from its origins to today.',
    imageUrl: 'painting09.png', // Add the URL to the painting image
  },
  {
    id: 4,
    title: 'Shooting Stars',
    artist: 'Paresh Nrshinga',
    price: '$2,850',
    description: 'Stunning art piece inspired by Jackson Pollock Black background',
    imageUrl: 'painting03.png', // Add the URL to the painting image
  },
  {
    id: 5,
    title: 'Uckermark lila-grün',
    artist: 'Skadi Engeln',
    price: '$2,230',
    description: 'The secret should be preserved, just like beauty, which perhaps lies especially within the denseness, and encryption, within the mystery.',
    imageUrl: 'painting02.png', // Add the URL to the painting image
  },
  {
    id: 6,
    title: 'A village in my countryside',
    artist: 'Pol Ledent',
    price: '$1,460',
    description: 'My paintings are always inspired by my countryside I just hope the wiewers will find a peaceful feeling when they look at it.',
    imageUrl: 'painting05.png', // Add the URL to the painting image
  },
  {
    id: 7,
    title: 'Surfers',
    artist: 'Agnieszka Kozień',
    price: '$845',
    description: 'somewhere on the waves:) Original oil painting. Signed on the front. Ready to hang. No framing required. Edges painted white.',
    imageUrl: 'painting06.png', // Add the URL to the painting image
  },
  {
    id: 8,
    title: 'Chasing Dreams',
    artist: 'Michael Vincent Manalo',
    price: '$730',
    description: 'Dwell on the beauty of life. Watch the stars, and see yourself running with them.',
    imageUrl: 'painting01.png', // Add the URL to the painting image
  },
  {
    id: 9,
    title: 'Liptovska Mara - goal',
    artist: 'KAROLINA ŚWIDECKA',
    price: '$3,410',
    description: 'Liptovska Mara is a village with a large lake in Slovakia. I really like going there. Everything is so oldschool.',
    imageUrl: 'painting04.png', // Add the URL to the painting image
  }  
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
