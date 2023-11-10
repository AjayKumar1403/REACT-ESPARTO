import React from 'react';
import { NavLink } from 'react-router-dom';
import './Whatsnew.css'; // Import the CSS file for WhatsNewComponent

const WhatsNewComponent = () => {
  const links = [
    {
      label: 'New Artworks',
      para: 'Explore our latest collection of stunning artworks created by talented artists.',
      link: '/new-artworks',
    },
    {
      label: 'Featured Artists',
      para: 'Meet the artists behind the masterpieces and discover their unique styles and techniques.',
      link: '/featured-artists',
    },
    {
      label: 'Exciting Features',
      para: 'Check out our new interactive tools and features designed to enhance your art experience.',
      link: '/exciting-features',
    },
    // Add more navigation links as needed
  ];

  return (
    <div className="whats-new-container">
      <h2>What's New</h2>
      <div className="whats-new-content">
        {links.map((link, index) => (
          <div className="whats-new-item" key={index}>
            <NavLink to={link.link} className="nav-link">
              <h3>{link.label}</h3>
              <p>{link.para}</p>
            </NavLink>
            <p>
              {/* You can add relevant content for each navigation link here */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNewComponent;
