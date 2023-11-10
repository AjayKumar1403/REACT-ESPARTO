import React from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';

function Start() {
  const navigate = useNavigate();
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">ESPARTA</h1>
            <div>
              <h5 data-aos="fade-up">
                At ESPARTA, we are passionate about art in all its forms. Our
                mission is to celebrate creativity and promote talented artists
                from around the world. With a deep appreciation for diverse
                artistic expressions, we curate a wide range of artworks that
                inspire, evoke emotions, and enrich the soul.
              </h5>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <button
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  onClick={(e) => navigate('/login')}
                >
                  Login
                </button>
              </div>
              <div className="text-center text-lg-start">
                <button
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  onClick={(e) => navigate('/register')}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="frontpageimg.svg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Start;
