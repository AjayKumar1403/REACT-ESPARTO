import React from 'react';
import { NavLink } from 'react-router-dom';
import './Collections.css'; // Import the CSS file for your component

const CollectionsComponent = () => {
  const collections = [
    { category: 'Paintings', image: 'painting.jpg', link: '/paintings' },
    { category: 'Photography', image: 'photography.jpg', link: '/photography' },
    { category: 'Collage', image: 'collage.png', link: '/collage' },
    { category: 'Sculpture', image: 'sculpture.png', link: '/sculpture' },
    { category: 'Drawings', image: 'drawings.png', link: '/drawings' },
  ];

  return (
    <div className="collections-container">
      <h2 style={{ color: 'white' }}>Our Collections</h2>
      <div className="collections-list">
        {collections.map((collection, index) => (
          <NavLink
            to={collection.link}
            key={index}
            className="collection-item-link"
          >
            <div className="collection-item">
              <h3>{collection.category}</h3>
              <img
                src={process.env.PUBLIC_URL + `/${collection.image}`}
                alt={`${collection.category}`}
                className="collection-image"
              />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CollectionsComponent;
