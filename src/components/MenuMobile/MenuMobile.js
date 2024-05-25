import React, { useState } from 'react';
import './MenuMobile.css';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>DIARY</li>
          <li>CALCULATOR</li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
