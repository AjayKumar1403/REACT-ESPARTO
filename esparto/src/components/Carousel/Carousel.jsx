import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const YourCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./img5.jpg" alt="First slide" />
        <Carousel.Caption className="custom-caption">
          <h3>
            Artistry Unleashed: ESPARTA, Where Creators Connect with Collectors
          </h3>
          <p>
            "Discover ESPARTA, your canvas for artistic exploration and
            connection. Unleash creativity, connect with artists, and collect
            unique pieces that resonate with your soul."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img7.jpg" alt="Second slide" />
        <Carousel.Caption className="custom-caption">
          <h3>
            Explore, Connect, Collect: Your Gateway to a Global Art Community
          </h3>
          <p>
            "Embark on a journey with ESPARTA — a platform where art knows no
            bounds. Explore a diverse world of creativity, connect with global
            artists, and collect masterpieces that speak to your imagination."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img.jpg" alt="Third slide" />
        <Carousel.Caption className="custom-caption">
          <h3>
            ESPARTA: Redefining Art Commerce – Where Every Brushstroke Tells a
            Story
          </h3>
          <p>
            "Experience ESPARTA, where art transcends commerce. Dive into a
            world where every brushstroke carries a narrative. Redefine your
            connection with art, one story at a time."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default YourCarouselComponent;
