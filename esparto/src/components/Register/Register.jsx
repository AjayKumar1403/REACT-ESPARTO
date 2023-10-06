import '../Login/main.css';
import '../Login/util.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Register() {
  const [username, setUsername] = useState('');
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function RegisterClick() {
    navigate('/');
  }

  function LoginClick() {
    navigate('/login');
  }
  const rules = [
    {
      required: true,
      message: 'Required',
    },
  ];
  return (
    <div className="limiter">
      <ToastContainer />
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Register</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter Email"
            >
              <input
                rules={rules}
                className="input100"
                type="text"
                name="username"
                placeholder="Email"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              ></input>
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter Your name"
            >
              <input
                rules={rules}
                className="input100"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(event) => setname(event.target.value)}
                value={name}
              ></input>
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter password"
            >
              <input
                rules={rules}
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              ></input>
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={RegisterClick}>
                Register
              </button>
            </div>

            <div className="flex-col-c p-t-100 p-b-40">
              <span className="txt1 p-b-9">Already have an account? </span>
              <a onClick={LoginClick} href="/login" className="txt3">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
