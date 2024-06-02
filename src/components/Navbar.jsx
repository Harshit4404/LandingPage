import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="./Group.png" alt="" />
        <div className="links">
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>
      </div>
      <button className="download-button">Download</button>
    </nav>
  );
};

export default Navbar;
