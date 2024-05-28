import React, { useState } from 'react';
import './MenuMobile.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration:none;
  &:hover {
    color: #9b9faa;;
  }
`;

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const addClass = () => {
    isOpen ? document.body.classList.remove('menu-open')
           : document.body.classList.add('menu-open')
    
  };


  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={(e)=>{
        toggleMenu()
        addClass()
      }}>
        {isOpen ? '✖' : '☰'}
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
          
        <ul>
          <li ><StyledLink to="/diary">DIARY</StyledLink></li>
          <br></br>
          <li ><StyledLink to="/calculator">CALCULATOR</StyledLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
