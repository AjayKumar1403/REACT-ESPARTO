import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function LoginArtist() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/artist-page');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="limiter">
      <ToastContainer />
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Login</span>

            <div className="wrap-input100 validate-input m-b-16">
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn" onClick={handleLogin}>
              <button onClick={handleLogin} className="login100-form-btn">
                Login
              </button>
            </div>

            <div className="flex-col-c p-t-100 p-b-40">
              <span className="txt1 p-b-9">Don’t have an account? </span>
              <a
                onClick={handleRegisterClick}
                href="/register"
                className="txt3"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginArtist;
