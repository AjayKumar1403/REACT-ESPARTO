import React from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate('/');
  }
  return (
    <div>
      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <section className="context">
        {/* <h1>ESPARTA</h1> */}
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    <img
                      src={`/img5.jpg`}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: '150px', borderRadius: '5px' }}
                    />
                    <h5>Artist.name</h5>
                    <p>Artist.address</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">Artist.email</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Salary</h6>
                          <p className="text-muted">Artist.salary</p>
                        </div>
                      </div>
                      <h6>ArtWorks</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Work</h6>
                          <p className="text-muted">Artist.work</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Status</h6>
                          <p className="text-muted">Artist.status</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-success"
                        >
                          Back to Home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
