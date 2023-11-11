import React from 'react';
import './Collection.css';

  const DrawingsData = [
    {
      id: 1,
      title: 'Shingh Chalet',
      artist: 'Lin-A-Lex',
      price: '$1190',
      description: 'Paint by Numbers for Adults and Kids, Canvas Oil Painting Kit for Beginners, 16 x 20 Inch, Arts and Craft for Home, Charming Winter Cityscape',
      imageUrl: 'Drawing1.jpeg', // Add the URL to the painting image
    },
    {
      id: 2,
      title: 'Artmaple Paint',
      artist: 'Kevin Gray',
      price: '$850',
      description: 'Artmaple paint is made with health in mind. It is non-toxic, odorless, and environmentally conscious.',
      imageUrl: 'Drawing2.jpg', // Add the URL to the painting image
    },
    {
      id: 3,
      title: 'BOHADIY Framed',
      artist: 'Muriel napoli',
      price: '$1050',
      description: 'What is found in my paintings is natures ability to change independently of the action of humanity, from its origins to today.',
      imageUrl: 'Drawing3.jpeg', // Add the URL to the painting image
    },
    {
      id: 4,
      title: 'Painting Mine',
      artist: 'Paresh Nrshinga',
      price: '$2,50',
      description: 'Stunning art piece inspired by Jackson Pollock Black background',
      imageUrl: 'Drawing4.jpg', // Add the URL to the painting image
    },
    {
      id: 5,
      title: 'Oil Paint',
      artist: 'Skadi Engeln',
      price: '$2,930',
      description: 'The secret should be preserved, just like beauty, which perhaps lies especially within the denseness, and encryption, within the mystery.',
      imageUrl: 'Drawing5.jpg', // Add the URL to the painting image
    },
    {
      id: 6,
      title: 'Snow Paint',
      artist: 'Pol Ledent',
      price: '$1,82',
      description: 'My paintings are always inspired by my countryside I just hope the wiewers will find a peaceful feeling when they look at it.',
      imageUrl: 'Drawing6.jpg', // Add the URL to the painting image
    },
    {
      id: 7,
      title: 'Surfers',
      artist: 'Agnieszka Kozień',
      price: '$624',
      description: 'Original oil painting. Signed on the front. Ready to hang. No framing required. Edges painted white.',
      imageUrl: 'Drawing7.jpg', // Add the URL to the painting image
    },
    {
      id: 8,
      title: 'Focus Dream',
      artist: 'Michael Vincent Manalo',
      price: '$630',
      description: ' Watch the stars, and see yourself running with them.',
      imageUrl: 'Drawing8.jpeg', // Add the URL to the painting image
    },
    {
      id: 9,
      title: 'Light Mara',
      artist: 'KAROLINA ŚWIDECKA',
      price: '$2,455',
      description: 'Liptovska Mara is a village with a large lake in Slovakia. I really like going there. Everything is so oldschool.',
      imageUrl: 'Drawing9.jpg', // Add the URL to the painting image
    }  
  ];
  
  const Drawings = () => {
    return (
      <>
        <h1>Drawings</h1>
        <div className="paintings-container">
          {DrawingsData.map((drawing) => (
            <div key={drawing.id} className="painting-card">
              <img
                src={drawing.imageUrl}
                alt={drawing.title}
                className="painting-image"
              />
              <h2>{drawing.title}</h2>
              <p>Artist: {drawing.artist}</p>
              <p>Description: {drawing.description}</p>
              <p>Price: {drawing.price}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

export default Drawings;
