import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/home';

const ParentContainer = () => {
  return (
    <div className="parent-container">
      <Sidebar />
      <Home />
    </div>
  );
};

export default ParentContainer;
