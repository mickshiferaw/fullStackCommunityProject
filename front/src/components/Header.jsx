import React, { useState } from 'react';
import './header.css';
import flag from "../assets/ETflag.png"
const Header = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // Notify parent component about the toggle state
  };

  return (
    <header className="header">
      <div className="logo">
      <img src={flag} alt="Ethiopian Flag" className="flag" />
        DMV Community</div>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
