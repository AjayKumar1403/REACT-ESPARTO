import Carousel from '../../components/Carousel/Carousel';
import CollectionsComponent from '../../components/Collections/Collections';
import Navbar from '../../components/Navbar/Navbar';

const BuyerPage = () => {
  const paintingsData = [
    
    
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
    },
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
    } ,
    {
      id: 1,
      title: 'Ski Chalet Austria',
      artist: 'Elizabeth Parker',
      price: '$290',
      description: 'This painting was executed with the use of a live camera overlooking a ski chalet, Austria.',
      imageUrl: 'photograph1.jpg', // Add the URL to the painting image
    },
    {
      id: 2,
      title: 'Young Blue Moon',
      artist: 'Kevin Gray',
      price: '$7050',
      description: 'Whenever I try to take a photo of the moon with my phone it only looks like a little smudge.',
      imageUrl: 'photograph2.jpg', // Add the URL to the painting image
    },
    {
      id: 3,
      title: 'Nectar',
      artist: 'Muriel napoli',
      price: '$5650',
      description: 'What is found in my paintings is natures ability to change independently of the action of humanity, from its origins to today.',
      imageUrl: 'photograph3.jpg', // Add the URL to the painting image
    },
    {
      id: 4,
      title: 'Shooting Stars',
      artist: 'Paresh Nrshinga',
      price: '$2,850',
      description: 'Stunning art piece inspired by Jackson Pollock Black background',
      imageUrl: 'photograph4.jpg', // Add the URL to the painting image
    },
    {
      id: 5,
      title: 'Uckermark lila-grün',
      artist: 'Skadi Engeln',
      price: '$2,230',
      description: 'The secret should be preserved, just like beauty, which perhaps lies especially within the denseness, and encryption, within the mystery.',
      imageUrl: 'photograph5.jpg', // Add the URL to the painting image
    },
    {
      id: 6,
      title: 'A village in my countryside',
      artist: 'Pol Ledent',
      price: '$1,460',
      description: 'My paintings are always inspired by my countryside I just hope the wiewers will find a peaceful feeling when they look at it.',
      imageUrl: 'photograph6.jpg', // Add the URL to the painting image
    },
    {
      id: 7,
      title: 'Surfers',
      artist: 'Agnieszka Kozień',
      price: '$845',
      description: 'somewhere on the waves:) Original oil painting. Signed on the front. Ready to hang. No framing required. Edges painted white.',
      imageUrl: 'photograph7.jpg', // Add the URL to the painting image
    },
    {
      id: 8,
      title: 'Chasing Dreams',
      artist: 'Michael Vincent Manalo',
      price: '$730',
      description: 'Dwell on the beauty of life. Watch the stars, and see yourself running with them.',
      imageUrl: 'photograph8.jpg', // Add the URL to the painting image
    },
    {
      id: 9,
      title: 'Liptovska Mara - goal',
      artist: 'KAROLINA ŚWIDECKA',
      price: '$3,410',
      description: 'Liptovska Mara is a village with a large lake in Slovakia. I really like going there. Everything is so oldschool.',
      imageUrl: 'photograph9.jpg', // Add the URL to the painting image
    }  ,
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
  return (
    <div>
      <Navbar />
      <Carousel />
      <br></br>
      <CollectionsComponent />
      <br></br>
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
    </div>
  );
};

export default BuyerPage;
