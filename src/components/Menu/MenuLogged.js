//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';



const MenuLogged = () => {

   return (
    <nav className="menu">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <ul>
        <li><Link to="/diary">DIARY</Link></li>
        <li><Link to="/calculator">CALCULATOR</Link></li>
      </ul>
    </nav>
  );
};

export default MenuLogged;
