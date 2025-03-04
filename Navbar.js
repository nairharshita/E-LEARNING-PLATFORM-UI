// src/components/Navbar.js

import React from 'react';
import logo from '../assets/logo.png';  // Import the logo image

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="flex items-center">
        <img src={logo} alt="E-Learning Platform" className="h-8 w-8 mr-2" />
        <h1 className="text-white text-2xl font-bold">E-Learning Platform</h1>
      </div>
    </nav>
  );
}

export default Navbar;
