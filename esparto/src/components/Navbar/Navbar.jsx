import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png'; // Import your logo image

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo-container">
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <h1 className="appName"> ESPARTA</h1>
        </Link>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="routes">
        <Link to={'/login'}>
          <h1>Login</h1>
        </Link>
        <Link to={'/register'}>
          <h1>Register</h1>
        </Link>
        <Link to={'/sidebar'}>
          <h1>Sidebar</h1>
        </Link>
        <Link to={'/userProfile'}>
          <h1>User Profile</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
